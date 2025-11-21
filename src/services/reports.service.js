import Restaurant from "../db/restaurant.schema.js";
import Reservation from "../db/reservation.schema.js";

const getLeastReservationsOnTuesday = async (limit = 5) => {
  const pipeline = [
    {
      $lookup: {
        from: "reservations",
        let: { restId: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$restaurant", "$$restId"] },
            },
          },
          // compute day of week (1=Sunday .. 7=Saturday)
          { $addFields: { dow: { $dayOfWeek: "$date" } } },
          { $match: { $expr: { $eq: ["$dow", 3] } } },
        ],
        as: "tuesdayReservations",
      },
    },
    { $addFields: { tuesdayCount: { $size: "$tuesdayReservations" } } },
    { $project: { name: 1, address: 1, zone: 1, tuesdayCount: 1 } },
    { $sort: { tuesdayCount: 1, name: 1 } },
    { $limit: limit },
  ];

  const result = await Restaurant.aggregate(pipeline);
  return result;
};

const getTopRestaurants = async (days = 30, limit = 5) => {
  const since = new Date(Date.now() - Math.max(1, days) * 24 * 60 * 60 * 1000);

  const pipeline = [
    { $match: { date: { $gte: since } } },
    { $group: { _id: "$restaurant", count: { $sum: 1 }, avgParty: { $avg: "$partySize" } } },
    { $sort: { count: -1 } },
    { $limit: limit },
    {
      $lookup: {
        from: "restaurants",
        localField: "_id",
        foreignField: "_id",
        as: "restaurant",
      },
    },
    { $unwind: "$restaurant" },
    { $project: { restaurant: { name: 1, zone: 1, address: 1, imageUrl: 1 }, count: 1, avgParty: 1 } },
  ];

  const result = await Reservation.aggregate(pipeline);
  return result;
};

export default { getLeastReservationsOnTuesday, getTopRestaurants };

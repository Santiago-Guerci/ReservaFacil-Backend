import ReportsService from "../services/reports.service.js";

const leastReservationsTuesday = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 5;
    const rows = await ReportsService.getLeastReservationsOnTuesday(limit);
    res.send(rows);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const topRestaurants = async (req, res) => {
  try {
    const days = parseInt(req.query.period, 10) || 30;
    const limit = parseInt(req.query.limit, 10) || 5;
    const rows = await ReportsService.getTopRestaurants(days, limit);
    res.send(rows);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export default { leastReservationsTuesday, topRestaurants };

import { expect } from "chai";
import sinon from "sinon";

import ReportsController from "../src/controllers/reports.controller.js";
import ReportsService from "../src/services/reports.service.js";

describe("Reports Controller", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("topRestaurants - success returns rows", async () => {
    const fakeRows = [
      { restaurant: { name: "A" }, count: 10, avgParty: 2 },
      { restaurant: { name: "B" }, count: 8, avgParty: 3 },
    ];

    sinon.stub(ReportsService, "getTopRestaurants").resolves(fakeRows);

    const req = { query: { period: "30", limit: "2" } };
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await ReportsController.topRestaurants(req, res);

    expect(ReportsService.getTopRestaurants.calledOnceWith(30, 2)).to.be.true;
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.deep.equal(fakeRows);
  });

  it("topRestaurants - service throws returns 500", async () => {
    sinon.stub(ReportsService, "getTopRestaurants").rejects(new Error("boom"));

    const req = { query: { period: "30", limit: "2" } };
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await ReportsController.topRestaurants(req, res);

    expect(res.status.calledOnceWith(500)).to.be.true;
    expect(res.send.calledOnce).to.be.true;
    const arg = res.send.firstCall.args[0];
    expect(arg).to.have.property("error");
    expect(arg.error).to.equal("boom");
  });
});

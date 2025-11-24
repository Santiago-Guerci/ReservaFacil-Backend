import { expect } from "chai";
import sinon from "sinon";

import AuthController from "../src/controllers/auth.controller.js";
import AuthService from "../src/services/auth.service.js";

describe("Auth Controller - login", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("login - success returns user and token", async () => {
    const fakeResult = { user: { name: "Santi", email: "santi@example.com" }, token: "tok" };
    sinon.stub(AuthService, "login").resolves(fakeResult);

    const req = { body: { email: "santi@example.com", password: "pass" } };
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await AuthController.login(req, res);

    expect(AuthService.login.calledOnceWith("santi@example.com", "pass")).to.be.true;
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.deep.equal(fakeResult);
  });

  it("login - invalid credentials returns 400 with error", async () => {
    sinon.stub(AuthService, "login").rejects(new Error("Invalid credentials"));

    const req = { body: { email: "wrong@example.com", password: "bad" } };
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await AuthController.login(req, res);

    expect(res.status.calledOnceWith(400)).to.be.true;
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.have.property("error", "Invalid credentials");
  });
});

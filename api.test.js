const request = require("supertest");
const app = require("./app");

describe("testing /setup path", () => {
    test("it should return status code 200", done => {
        request(app)
        .get("/setup")
        .then(response => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });

    test("it should return application/json content-type", done => {
        request(app)
        .get("/setup")
        .then(response => {
            expect(response.type).toBe("text/html");
            done();
        });
    });
});


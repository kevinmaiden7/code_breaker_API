const request = require("supertest");
const app = require("./app");

describe("testing /setup path", () => {
    test("it should return status code 200", done => {
        request(app)
        .get("/setup/1234")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    test("it should return text/html content-type", done => {
        request(app)
        .get("/setup/1234")
        .then(response => {
            expect(response.type).toBe("text/html");
            done();
        });
    });
});


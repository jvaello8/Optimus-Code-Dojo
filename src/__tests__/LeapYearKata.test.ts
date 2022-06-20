import { myTestFunction }  from "../LeapYearKata";

describe("Leap Year Kata Tests", () => {
    test("when a normal leap year is passed it returns true", async () => {
        const res = myTestFunction(12312312);
        expect(res).toBeTruthy();
    });
});

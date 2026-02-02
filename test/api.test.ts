import { describe,test,mock } from "node:test";
import { NewsApiData } from "@/app/constants/data";
import { mockNewsSuccess,mockNewsEdgeCase,mockNewsEmpty } from "@/mock";
import { handleApiTopHeadlinesEndpoint } from "@/app/networkutils";
import  assert  from "node:assert";

  

describe("Test cases for News Api.",()=>{

  test("Top headline api test case for success with complete data",()=>{
      const topHeadlineMock = mock.fn(()=>{
        return mockNewsSuccess;
      });

      const expectedTopHeadlineResult = mockNewsSuccess;
      assert.strictEqual(topHeadlineMock.mock.callCount(),0);
      const result = handleApiTopHeadlinesEndpoint();

      assert.deepStrictEqual(result,expectedTopHeadlineResult);
      assert.strictEqual(topHeadlineMock.mock.callCount(),1);
  });

});
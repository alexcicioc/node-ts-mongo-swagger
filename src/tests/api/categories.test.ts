import chai, { expect } from 'chai';
import spies from 'chai-spies';
import sinon from 'sinon';
import { AppRequest } from "../../types/request";
import { CategoryOrm } from "../../orms/category";
import { getCategories } from "../../controllers/categories";
import { ResponseMock } from "./mocks/mocked-response";

chai.use(spies);

describe('Testing change major mutation', function () {

  it('Claim account email happy path', async function () {
    const data = [
      {
        id: 2,
        title: "string2",
        description: null,
        createdAt: "2020-10-10T11:25:18.000Z",
        updatedAt: "2020-10-10T11:25:18.000Z"
      },
      {
        id: 3,
        title: "Test category",
        description: "Description",
        createdAt: "2020-10-10T11:26:59.000Z",
        updatedAt: "2020-10-10T11:26:59.000Z"
      }
    ];
    const categoryOrm = sinon.createStubInstance(CategoryOrm);
    // @ts-ignore
    categoryOrm.getAll.resolves(data);

    // @ts-ignore
    const req: AppRequest = {
      orms: {
        categoryOrm: categoryOrm,
      },
      query: {
        limit: 10,
        offset: 0
      }
    }


    // @ts-ignore
    const response = await getCategories(req, new ResponseMock());
    expect(response).to.have.property('results');
    expect(response).to.have.property('total');
    expect(response).to.eql({results: data, total: data.length})
  });
});

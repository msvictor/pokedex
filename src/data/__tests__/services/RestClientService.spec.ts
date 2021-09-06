import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AppConstants from '@core/AppConstants';
import { waitFor } from '@testing-library/react-native';
import RestClientService from '@data/services/RestClientService';

const apiMock = new MockAdapter(axios);

describe('Rest Client', () => {
  it('should be able to do a get api request', async () => {
    apiMock.onGet(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const getRequest = await RestClientService.get({
        path: `${AppConstants.TEST_URL}/test`,
      });

      expect(getRequest.status).toBe(200);
    });
  });

  it('should be able to do a get authenticated api request', async () => {
    apiMock.onGet(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const getRequest = await RestClientService.get({
        path: `${AppConstants.TEST_URL}/test`,
        isRequestAuthenticated: true,
      });

      expect(getRequest.status).toBe(200);
    });
  });

  it('should be able to do a delete api request', async () => {
    apiMock.onDelete(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const deleteRequest = await RestClientService.delete({
        path: `${AppConstants.TEST_URL}/test`,
      });

      expect(deleteRequest.status).toBe(200);
    });
  });

  it('should be able to do a delete authenticated api request', async () => {
    apiMock.onDelete(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const deleteRequest = await RestClientService.delete({
        path: `${AppConstants.TEST_URL}/test`,
        isRequestAuthenticated: true,
      });

      expect(deleteRequest.status).toBe(200);
    });
  });

  it('should be able to do a post api request', async () => {
    apiMock.onPost(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const postRequest = await RestClientService.post({
        path: `${AppConstants.TEST_URL}/test`,
        data: {},
      });

      expect(postRequest.status).toBe(200);
    });
  });

  it('should be able to do a post authenticated api request', async () => {
    apiMock.onPost(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const postRequest = await RestClientService.post({
        path: `${AppConstants.TEST_URL}/test`,
        isRequestAuthenticated: true,
        data: {},
      });

      expect(postRequest.status).toBe(200);
    });
  });

  it('should be able to do a put api request', async () => {
    apiMock.onPut(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const putRequest = await RestClientService.put({
        path: `${AppConstants.TEST_URL}/test`,
        data: {},
      });

      expect(putRequest.status).toBe(200);
    });
  });

  it('should be able to do a put authenticated api request', async () => {
    apiMock.onPut(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const postRequest = await RestClientService.put({
        path: `${AppConstants.TEST_URL}/test`,
        isRequestAuthenticated: true,
        data: {},
      });

      expect(postRequest.status).toBe(200);
    });
  });

  it('should be able to do a patch api request', async () => {
    apiMock.onPatch(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const patchRequest = await RestClientService.patch({
        path: `${AppConstants.TEST_URL}/test`,
        data: {},
      });

      expect(patchRequest.status).toBe(200);
    });
  });

  it('should be able to do a put authenticated api request', async () => {
    apiMock.onPatch(`${AppConstants.TEST_URL}/test`).reply(200, {});
    await waitFor(async () => {
      const patchRequest = await RestClientService.patch({
        path: `${AppConstants.TEST_URL}/test`,
        isRequestAuthenticated: true,
        data: {},
      });

      expect(patchRequest.status).toBe(200);
    });
  });
});

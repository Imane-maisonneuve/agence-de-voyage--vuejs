import http from "../http-common";

class VoyageDataService {
  getAll() {
    return http.get("/voyage");
  }

  create(data) {
    return http.post("/voyage", data);
  }

  get(id) {
    return http.get(`/voyage/${id}`);
  }

  update(id, data) {
    return http.put(`/voyage/${id}`, data);
  }

  delete(id) {
    return http.delete(`/voyage/${id}`);
  }
}
export default new VoyageDataService();

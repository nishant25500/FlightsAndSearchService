const { where } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      //this is usign raw query
      // const query =
      //   "INSERT INTO Cities (cityName, createdAt, updatedAt) VALUES (cityName, NOW(), NOW())";
      // const city = await sequelize.query(query, {
      //   type: sequelize.QueryTypes.INSERT,
      // });

      //this is using sequelize query
      const city = await City.create({name});
      return city;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = CityRepository;

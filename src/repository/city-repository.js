const { where, Op } = require("sequelize");

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
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async createAllCity(data) {
    try {
      const city = await City.bulkCreate(data, { fields: ["name"] });
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

      //for getting updated data in return we use below approach
      // const city = await City.findByPk(cityId);
      // city.name = data.name;
      // await city.save();
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

  async getAllCity(filter) {
    //filter can be empty
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = CityRepository;

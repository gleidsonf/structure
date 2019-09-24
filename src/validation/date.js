const joi = require('@hapi/joi');
const { mapToJoi, mapToJoiWithReference, equalOption } = require('./utils');

module.exports = {
  type: Date,
  joiMappings: [],
  valueOrRefOptions: [['min', 'min'], ['max', 'max']],
  createJoiSchema(typeDescriptor) {
    let joiSchema = mapToJoiWithReference(typeDescriptor, {
      initial: joi.date(),
      mappings: this.valueOrRefOptions,
    });

    joiSchema = equalOption(typeDescriptor, { initial: joiSchema });

    return mapToJoi(typeDescriptor, {
      initial: joiSchema,
      mappings: this.joiMappings,
    });
  },
};

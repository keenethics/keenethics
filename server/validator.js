const errorMessages = ({ value }, field) => {
  const errorField = {
    [field]: {
      value,
      error: true,
    },
  };

  return {
    errorField,
    status: `Wrong ${field}`,
  };
};

const checkRequiredEstimateFields = (body) => {
  const requiredFields = ['name', 'emailEstimate'];
  const invalidFields = requiredFields.filter((field) => {
    if (body[field] && Array.isArray(body[field].value)) {
      return !body[field].value.length;
    }

    return !(body[field] && body[field].value);
  });

  if (invalidFields.length > 0) {
    const [field] = invalidFields;
    const errorMessage = errorMessages(body[field], field);

    return [errorMessage];
  }

  return [];
};

module.exports = { checkRequiredEstimateFields };

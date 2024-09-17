const BASE_URL = `http://localhost:8000/api/`;

export const sendConnection = async (
  fullName,
  countryCode,
  phoneNumber,
  email,
  socialHandleId,
  socialHandleType,
  feedback
) => {
  try {
    const send = await fetch(BASE_URL + "connect", {
      method: "POST",
      headers: {
        "Cotent-Type": "application/json",
      },
      body: {
        fullName,
        countryCode,
        phoneNumber,
        email,
        socialHandleId,
        socialHandleType,
        feedback,
      },
    });

    if (!send.ok) {
      throw new Error();
      return;
    }
    const res = await send.json();
    return res;
  } catch (error) {
    return "Error occured while sending request" + error;
  }
};

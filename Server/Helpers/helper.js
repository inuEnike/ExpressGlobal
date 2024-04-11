export const generateTrackingId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";

  let randomCode = "";

  for (let i = 0; i < 10; i++) {
    randomCode += characters[Math.floor(Math.random() * characters.length)];
  }
  console.log(randomCode);
};

// generateTrackingId();

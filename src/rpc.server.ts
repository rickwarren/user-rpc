import { createServer } from "http";
import { createTwirpServer } from "twirpscript";
import { userProtoHandler } from "./services/user.service.ts";
import { profileProtoHandler } from "./services/profile.service.ts";

const PORT = 8080;

const app = createTwirpServer([userProtoHandler, profileProtoHandler]);

app.use(async (req, _ctx, next) => {
  if (req.method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-request-method": "*",
        "access-control-allow-methods": "*",
        "access-control-allow-headers": "*",
        "content-type": "application/json",
      },
      body: "",
    };
  }

  const { statusCode, headers, body } = await next();
  return {
    statusCode,
    body,
    headers: {
      "access-control-allow-origin": "*",
      ...headers,
    },
  };
});

createServer(app).listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`),
);
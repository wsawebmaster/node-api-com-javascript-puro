function bodyParser(request, callback) {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      body = JSON.parse(body); //converte para objeto
      request.body = body;
      callback();
    });
}

module.exports = bodyParser;

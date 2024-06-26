class Error {

    notFoundError(req, res, next) {
        res.send({
            status: 404,
            message: "notFound"
        })
    }

    errorHandel(err, req, res, next) {
        let dupkey = null;
        if (err.message.includes("dup key")) {
            dupkey = " duplicate phone number ,try diffrent number"
        }
        res.send({
            status: err?.status ?? err?.statusCode ?? 500,
            message: dupkey ?? err?.message ?? "ServerERROR"
        })
    }
}

module.exports = {
    Error
}
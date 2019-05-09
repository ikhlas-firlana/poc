'use strict';
module.exports = {
    index: async (ctx) => {
        let hello = await strapi.services.category.fetchAll(ctx.query);
        // console.log("::", hello);
        hello = hello.map((val) => {
            val = val.id
            return val
        })
        ctx.send(hello);
    }
}
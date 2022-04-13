import business from '../business/business.container';
import postDAO from "../DAO/postDAO";

const postEndpoint = (router) => {

    router.get('/api/posts', async (request, response, next) => {
        console.log("kek")
        try {
            let result = await postDAO.query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.post('/api/posts', async (request, response, next) => {
        const body = request.body
        console.log(body)
        try {
            const createdPost = await postDAO.createNewOrUpdate(body)
            return response.status(201).json(createdPost);
        } catch (error) {
            console.log(error);
        }
    });
};
export default postEndpoint;

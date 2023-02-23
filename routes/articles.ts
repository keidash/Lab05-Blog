import Router, {RouterContext} from "koa-router";

const articles = [
  {titles: 'Hello articles', fullText: 'some text to fill the body'},
  {titles: 'another articles', fullText: 'again here is some text here to fill'},
  {titles: 'conventry university', fullText: 'some news about conventry university'},
  {titles: 'smart campus', fullText: 'smart campus is coming to IVE'}
];

const router = new Router({prefix: '/api/v1/articles'});

const getAll = async (ctx: RouterContext, next: any) => {
  ctx.body = articles;
  await next();
}

const createArticle = async (ctx: RouterContext, next: any) => {
  await next();
}

const getById = async (ctx: RouterContext, next: any) => {
  await next();
}

const updateArticle = async (ctx: RouterContext, next: any) => {
  await next();
}

const deleteArticle = async (ctx: RouterContext, next: any) => {
  await next();
}

router.get('/', getAll);
router.post('/', createArticle);
router.get('/:id', getById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export { router };

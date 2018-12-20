import Route from '@ember/routing/route';

let bookmarks = [{
    id: 1,
    title: 'komal',
    about: 'Student'
},
{
    id: 2,
    title: 'pragya',
    about: 'working'
}];
export default Route.extend({
    model() {
        return bookmarks;
    }
});

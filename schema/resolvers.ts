import { MovieList, UserList } from '../FakeData'

export const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: async (_, args) => {
            const Id = await args.id
            return UserList.find((user) => {
                console.log(Id, user.id)
                if (user.id == Id) {
                    return user
                }
            })
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = MovieList.find((movie) => {
                if (movie.name == name) {
                    return movie
                }
            })
            return movie;
        },
    },
    // User: {
    //     favoriteMovies: () => {
    //         return MovieList.filter(() => {

    //         }
    //             MovieList,
    //             (movie) =>
    //                 movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
    //         );
    //     },
    // }
}
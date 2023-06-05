import {
    ADD_ALBUM,
    ADD_BEATS, ADD_SERVICE,
    ADMIN_ROUTER,
    ALBUM_ROUTER,
    ALL_MUSIC_ROUTER, ALL_MUSIC_ROUTER_GENRES, ERROR,
    GENRES_ROUTER, LOGIN_ROUTER,
    MAIN_ROUTER,
    MUSIC_ROUTER,
    PROD_ROUTER, REDACT_BEATS, REGISTRATION_ROUTER, SERVICES_ROUTER
} from "../utils/const";
import Admin from "../pages/Admin";
import Main from "../pages/Main";
import Music from "../pages/Music";
import AllMusic from "../pages/AllMusic";
import Album from "../pages/Album";
import Prod from "../pages/Prod";
import Genres from "../pages/Genres";
import Login from "../pages/Login";
import User from "../pages/User";
import AddBeats from "../pages/AddBeats";
import AddService from "../pages/AddService";
import AddAlbum from "../pages/AddAlbum";
import ServicesAll from "../pages/ServicesAll";

export const publicRoutes = [
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
    },
    {
        path: ERROR,
        Component: Login
    },
]

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: SERVICES_ROUTER,
        Component: ServicesAll
    },
    {
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
    },
    {
        path: ALBUM_ROUTER,
        Component: Album
    },
    {
        path: GENRES_ROUTER,
        Component: Genres
    },
    {
        path: PROD_ROUTER,
        Component: Prod
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Login
    },
    {
        path: LOGIN_ROUTER,
        Component: Login
    },
    {
        path: MUSIC_ROUTER + '/:id',
        Component: Music
    },
    {
        path: PROD_ROUTER + '/:id',
        Component: User
    },
    {
        path: ALL_MUSIC_ROUTER_GENRES + '/:genre',
        Component: AllMusic
    },
    {
        path: ADD_BEATS,
        Component: AddBeats
    },
    {
        path: ADD_SERVICE,
        Component: AddService
    },
    {
        path: ADD_ALBUM,
        Component: AddAlbum
    },
]
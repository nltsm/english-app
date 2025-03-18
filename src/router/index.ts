import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import AppLayout from '../layouts/AppLayout.vue'
import LearningLayout from "@/layouts/LearningLayout.vue";
import HomePage from "@/views/Home/HomePage.vue";
import WordsPage from "@/views/Words/WordsPage.vue";
import ReviewPage from "@/views/Words/ReviewPage.vue";
import ExerciseReviewPage from "@/views/Exercises/ExerciseReviewPage.vue";
import ExerciseEnglishToRussianPage from "@/views/Exercises/ExerciseEnglishToRussianPage.vue";

const routes: Array<RouteRecordRaw> = [
    // home
    {path: '/', redirect: '/home'},

    {
        path: '/home',
        component: AppLayout,
        children: [
            {path: '', component: HomePage, name: 'home'},
        ]
    },

    // words
    {
        path: '/words',
        component: AppLayout,
        children: [
            {path: '', component: WordsPage, name: 'words.index'},
        ]
    },
    {
        path: '/words',
        component: LearningLayout,
        children: [
            {path: 'review', component: ReviewPage, name: 'words.review'},
        ]
    },

    // exercises
    {
        path: '/exercises',
        component: LearningLayout,
        children: [
            {path: 'review', component: ExerciseReviewPage, name: 'exercises.review'},
            {path: 'english-to-russian', component: ExerciseEnglishToRussianPage, name: 'exercises.english-to-russian'},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

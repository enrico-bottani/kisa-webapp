export default class AppRoutes {
    static LOGIN_ROUTE = "/login";
    static PROFILE_ROUTE = "/profile";
    static SERIES = "/series";
    static SERIES_ID = this.SERIES + "/:seriesId";
    static EXERCISE = "/exercise";
    static EXERCISE_ID = "/exercise" + "/:exerciseId/";
    static SENTENCE = "sentence/";
    static SENTENCE_ID = AppRoutes.SENTENCE+":sentenceId";
}

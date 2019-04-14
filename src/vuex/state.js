export default {
	tab: 'all',
    articleList: [],
    collectTopics: [],
    isLoading: false,
    isMore: false,
    isShowAsideMenu: false,
    isShowLogin: false,
    isShowInfo: false,
    isShowMsg: false,
    isShowNewArticle: false,
    isShowAbout: false,
    scrollTop: 0,
    userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', success: false},
    ak: localStorage.ak || ''
}
<template>
    <div class="top-box">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" v-link="{ path: '/' }">oj admin</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a v-link="{ path: '/sub' }" title="去首页">主页</a>
                        </li>
                        <li><a v-link="{ path: '/problems' }">题目</a></li>
                        <li><a v-link="{ path: '/process' }">比赛</a></li>

                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li class="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div><!--/.container-fluid -->
        </nav>

        <div class="row">
            <div class="col-xs-3">
                <div class="main-title">
                    <a>首页</a>
                </div>
                <ul class="secondary-title">
                    <li>
                        <a>主页</a>
                    </li>
                    <li>
                        <a>判题服务器</a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-9">
                <router-view></router-view>
            </div>
        </div>



        <button class="btn btn-default"
                @click="showModal = true"
        >Show modal
        </button>
        <modal :show.sync="showModal">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div slot="modal-body" class="modal-body">.asdfasfdasfasfasfas..</div>
        </modal>

        <button class="btn btn-primary"
                @click="fadeModal = true">
            Fade modal
        </button>
        <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
            <div slot="modal-body" class="modal-body">.asdfasfdasfasfasfas..</div>
        </modal>

        <button class="btn btn-success"
                @click="zoomModal = true">
            Zoom modal
        </button>
        <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
            <div slot="modal-body" class="modal-body">..asdfasfdasfasfasfas.</div>
        </modal>

        <button class="btn btn-default"
                @click="showCustomModal = true">
            Show custom modal
        </button>
        <modal :show.sync="showCustomModal" effect="fade" width="400">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">
                    <i>Custom</i> <code>Modal</code> <b>Title</b>
                </h4>
            </div>
            <div slot="modal-body" class="modal-body">.asdfasfdasfasfasfas..</div>
            <div slot="modal-footer" class="modal-footer">
                <button type="button" class="btn btn-default" @click='showCustomModal = false'>Exit</button>
                <button type="button" class="btn btn-success" @click='showCustomModal = false'>Custom Save</button>
            </div>
        </modal>
        <button class="btn btn-default"
                @click="largeModal = true"
        >Large Modal
        </button>
        <modal :show.sync="largeModal">
            <div slot="modal-body" class="modal-body">.asdfasfdasfasfasfas..</div>
        </modal>
        <button class="btn btn-default"
                @click="smallModal = true"
        >Small Modal
        </button>
        <modal :show.sync="smallModal">
            <div slot="modal-body" class="modal-body">..asdfasfdasfasfasfas.</div>
        </modal>


        {{ showCustomModal }}
        {{ fadeModal }}
        {{ showModal }}


        <Footerbar></Footerbar>
    </div>
</template>

<script>
    import store from './vuex/store'
    import { navbar, dropdown, progressbar, alert, modal } from 'vue-strap'
    import Footerbar from './components/Home/footer.vue'

    export default {
        store,
        components: {
            navbar, dropdown, progressbar, alert, Footerbar, modal
        },
    }
</script>

<style>
    @import './assets/css/normalize.css';
    @import './assets/css/oj.css';
</style>
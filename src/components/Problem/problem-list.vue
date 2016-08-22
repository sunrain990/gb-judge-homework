<template>
    <button class="btn btn-default"
            @click="showModal = true"
    >Show modal
    </button>
    <modal :show.sync="showModal">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">Modal title</h4>
        </div>
        <div slot="modal-body" class="modal-body">...</div>
    </modal>

    <button class="btn btn-primary"
            @click="fadeModal = true">
        Fade modal
    </button>
    <modal title="Fade Modal" :show.sync="fadeModal" effect="fade" width="800">
        <div slot="modal-body" class="modal-body">...</div>
    </modal>

    <button class="btn btn-success"
            @click="zoomModal = true">
        Zoom modal
    </button>
    <modal title="Zoom Modal" :show.sync="zoomModal" effect="zoom" width="400">
        <div slot="modal-body" class="modal-body">...</div>
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
        <div slot="modal-body" class="modal-body">...</div>
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
        <div slot="modal-body" class="modal-body">...</div>
    </modal>
    <button class="btn btn-default"
            @click="smallModal = true"
    >Small Modal
    </button>
    <modal :show.sync="smallModal">
        <div slot="modal-body" class="modal-body">...</div>
    </modal>


    {{ showCustomModal }}
    {{ fadeModal }}
    {{ showModal }}
</template>

<script>
    import { modal} from 'vue-strap'

    export default {
        components: {
            modal
        },
    }
</script>
<template>
    <div>
        <h2 class="titulo my-4 mb-5 pb-2">Editar Nota</h2>
        <EditNote/>
    </div>
</template>

<script>
import EditNote from '@/components/EditNote.vue'
export default {
    name: 'Edit-View',
    components: {
        EditNote
    }
}

</script>
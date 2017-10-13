<template>
    <div class="apply-loan">
        <header>申请贷款</header>
        <component :is="componentId" @toNexT="handleToNext">
        </component>
    </div>
</template>

<script>
import info from './info.vue'
import frist from './frist.vue'
import success from './success.vue'
export default {
    data() {
        return {
            componentId: frist
        }
    },
    methods: {
        handleToNext(paylod) {
            if (paylod.type === 'info') {
                this.componentId = info
            }
            if (paylod.type === 'success') {
                this.componentId = success
            }
        }
    },
    components: {
        info,
        frist,
        success
    }
}
</script>

<style lang="scss" scoped>
  @import './../../public/sass/common.scss';
.mint-button {
    margin: 20px 0 20px 0;
    width: 86%;
}

.apply-loan {
    header {
        font-size: pxToRem(18px);
        color: #fff;
        line-height: pxToRem(40px);
        background-color: rgb(255, 101, 27);
    }
}
</style>

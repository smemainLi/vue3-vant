<template>
  <div class="grow-value-card">
    <div :class="['content',borderColor? 'border-color':'']">
      <div v-text="getValueText"></div>
      <div v-text="`+${getValue}`"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
@Component({
  props:{
    borderColor:{       // border
      type:Boolean,
      default:true
    },
    getValueText:{     // 获取分值文本
      type:String,
      default:""
    },
    getValue:{         // 获取相应的分值
      type:Number
    }

  },
  components: {
  }
})
export default class GrowValueCard extends Vue {
 
}
</script>

<style lang="scss" scoped>
.grow-value-card{
  color:$color-35;
  font-size: $size28;
  .content{
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.border-color{
  border-bottom: 1px #E5E5E5 solid;
}
</style>
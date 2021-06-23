<template>
	<div>
		<div class="text-3xl">{{ title }}</div>
		<div class="text-base text-secondary">{{ subtitle }}</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	props: {
		title: String,
		subtitle: String,
	}
})
</script>
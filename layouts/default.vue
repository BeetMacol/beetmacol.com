<template>
	<div class="bg-primary min-h-screen text-primary">
		<main class="py-1 px-2">
			<Nuxt />
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	head() {
		return {
			title: "BeetMacol's website",
		}
	},
})
</script>

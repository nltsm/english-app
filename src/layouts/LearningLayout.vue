<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonRouterOutlet, IonTabs} from '@ionic/vue';
</script>

<style>
.tab-bar-image {
	height: 30px;
}
</style>
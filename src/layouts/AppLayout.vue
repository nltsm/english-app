<template>
	<ion-page>
		<ion-router-outlet></ion-router-outlet>
		
		<div class="bottom-tabs">
			<router-link :to="{name: 'home'}" class="bottom-tabs_tab">
				<div class="tab-bar-image">
					<LogoIcon/>
				</div>
				<label>Главная</label>
			</router-link>

			<router-link :to="{name: 'words.index'}" class="bottom-tabs_tab">
				<div class="tab-bar-image">
					<DictionaryIcon/>
				</div>
				<label>Словарь</label>
			</router-link>

			<router-link :to="{name: 'words.review'}" class="bottom-tabs_tab">
				<div class="tab-bar-image">
					<PremiumIcon/>
				</div>
				<label>Премиум</label>
			</router-link>
			<router-link :to="{name: 'words.review'}" class="bottom-tabs_tab">
				<div class="tab-bar-image">
					<UserIcon/>
				</div>
				<label>Профиль</label>
			</router-link>
		</div>
	</ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet} from '@ionic/vue';
import DictionaryIcon from "@/ui/icons/DictionaryIcon.vue";
import LogoIcon from "@/ui/icons/LogoIcon.vue";
import PremiumIcon from "@/ui/icons/PremiumIcon.vue";
import UserIcon from "@/ui/icons/UserIcon.vue";
</script>
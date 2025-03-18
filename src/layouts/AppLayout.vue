<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>

			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="home">
					<router-link :to="{name: 'home'}" class="tab-link">
						<div class="tab-bar-image">
							<LogoIcon/>
						</div>
						<ion-label>Главная</ion-label>
					</router-link>
				</ion-tab-button>

				<ion-tab-button tab="words">
					<router-link :to="{name: 'words.index'}" class="tab-link">
						<div class="tab-bar-image">
							<DictionaryIcon/>
						</div>
						<ion-label>Словарь</ion-label>
					</router-link>
				</ion-tab-button>


				<ion-tab-button tab="cards">
					<router-link :to="{name: 'words.review'}" class="tab-link">
						<div class="tab-bar-image">
							<PremiumIcon/>
						</div>
						<ion-label>Премиум</ion-label>
					</router-link>
				</ion-tab-button>

				<ion-tab-button tab="tab4" href="/tabs/tab4">
					<div class="tab-bar-image">
						<UserIcon/>
					</div>
					<ion-label>Профиль</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet} from '@ionic/vue';
import DictionaryIcon from "@/ui/icons/DictionaryIcon.vue";
import LogoIcon from "@/ui/icons/LogoIcon.vue";
import PremiumIcon from "@/ui/icons/PremiumIcon.vue";
import UserIcon from "@/ui/icons/UserIcon.vue";
</script>
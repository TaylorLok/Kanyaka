<template>
    <Head title="Welcome" />

    <div class="min-h-screen flex flex-col justify-between relative overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-50"></div>
            <div class="absolute inset-0 animate-float">
                <img src="/images/anti-corruption-symbol.png" alt="Anti-corruption symbol" class="w-full h-full object-cover opacity-30">
            </div>
        </div>

        <div class="flex-grow flex items-center justify-center relative z-10">
            <div class="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 class="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Bienvenue sur Kanyaka</h1>
                <p class="text-gray-600 dark:text-gray-300 mb-8 text-center">
                    Une application pour les lanceurs d'alerte en République Démocratique du Congo pour 
                    lutter contre les anti-valeurs et promouvoir la transparence.
                </p>
                <div class="flex flex-col space-y-4">
                    <Link
                        v-if="canLogin"
                        :href="route('login')"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center"
                    >
                        Log in
                    </Link>
                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>

        <footer class="bg-gray-200 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 py-4 relative z-10">
            <div class="container mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
                <strong>&copy; {{ currentYear }} Kanyaka. All rights reserved. T&Cs Apply</strong>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>

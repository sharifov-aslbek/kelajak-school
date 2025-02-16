<template>
    <div class="min-h-screen bg-white">
      <!-- Header -->
      <header class="bg-[#2f3875] p-6 flex justify-between items-center">
        <h1 class="text-white text-2xl font-semibold">Kirish Kelajak School</h1>
        <!-- <div class="flex flex-col">
            <a href="#" class="text-white font-semibold hover:underline text-lg">
              Login parolni bilmaysizmi?
            </a>
            <a href="#" class="text-white hover:underline text-sm">
              Login parolni ustozingizdan so'rashingiz mumkin?
            </a>
        </div> -->
      </header>
  
      <!-- Login Form -->
      <main class="max-w-md mx-auto mt-24 p-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="space-y-2">
            <label for="login" class="block text-gray-900 text-lg">
              Login
            </label>
            <input
              id="login"
              v-model="login"
              type="text"
              required
              class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div class="space-y-2">
            <label for="password" class="block text-gray-900 text-lg">
              Parol
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                <EyeOffIcon v-else class="h-5 w-5" />
              </button>
            </div>
          </div>
  
          <button
            type="submit"
            class="w-full py-3 px-4 bg-[#97c05c] hover:bg-[#88af52] text-white rounded-md transition-colors text-lg"
          >
            Tizimga kiring
          </button>
        </form>
  
        <div class="mt-6 flex items-center gap-2 text-gray-600">
          <QuoteIcon class="h-5 w-5" />
          <span>Login yoki parolni unutdingizmi?</span>
          <a href="#" class="text-[#2f3875] hover:underline">Loginni tiklash</a>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { EyeIcon, EyeOffIcon, QuoteIcon } from 'lucide-vue-next'
  
  const login = ref('')
  const password = ref('')
  const showPassword = ref(false)
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }
  
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', {
      login: login.value,
      password: password.value
    })
  }
  </script>
<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="p-4">
          <h1 class="text-2xl font-bold text-gray-900 mb-4">Video Player</h1>
          
          <div class="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref="videoPlayer"
              class="w-full h-full object-contain"
              :src="videoSrc"
              autoplay
              loop
              muted
              playsinline
            ></video>
            <div class="absolute inset-0 flex items-center justify-center" v-if="!isPlaying">
              <button
                @click="playVideo"
                class="bg-white bg-opacity-75 rounded-full p-4 text-gray-800 hover:bg-opacity-100 transition-all duration-300"
                aria-label="Play video"
              >
                <PlayIcon class="w-12 h-12" />
              </button>
            </div>
            <div class="absolute bottom-4 left-4 right-4 flex items-center space-x-2">
              <button
                @click="togglePlay"
                class="text-white hover:text-gray-300 transition-colors duration-300"
                :aria-label="isPlaying ? 'Pause video' : 'Play video'"
              >
                <PauseIcon v-if="isPlaying" class="w-8 h-8" />
                <PlayIcon v-else class="w-8 h-8" />
              </button>
              <div class="flex-grow bg-gray-600 rounded-full h-1 overflow-hidden">
                <div
                  class="bg-white h-full transition-all duration-300 ease-in-out"
                  :style="{ width: `${progress}%` }"
                ></div>
              </div>
              <button
                @click="toggleMute"
                class="text-white hover:text-gray-300 transition-colors duration-300"
                :aria-label="isMuted ? 'Unmute video' : 'Mute video'"
              >
                <VolumeXIcon v-if="isMuted" class="w-6 h-6" />
                <Volume2Icon v-else class="w-6 h-6" />
              </button>
              <button
                @click="toggleFullscreen"
                class="text-white hover:text-gray-300 transition-colors duration-300"
                aria-label="Toggle fullscreen"
              >
                <MaximizeIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div class="mt-4">
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Video Description</h2>
            <p class="text-gray-600">
              This is an auto-playing video demonstrating the capabilities of our custom video player.
              The video loops continuously and starts muted to comply with autoplay policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { PlayIcon, PauseIcon, VolumeXIcon, Volume2Icon, MaximizeIcon } from 'lucide-vue-next'
  
  const videoSrc = 'src/assets/video-mini.mp4'
  const videoPlayer = ref(null)
  const isPlaying = ref(true)
  const isMuted = ref(true)
  const progress = ref(0)
  
  const playVideo = () => {
    if (videoPlayer.value) {
      videoPlayer.value.play()
      isPlaying.value = true
    }
  }
  
  const togglePlay = () => {
    if (videoPlayer.value) {
      if (isPlaying.value) {
        videoPlayer.value.pause()
      } else {
        videoPlayer.value.play()
      }
      isPlaying.value = !isPlaying.value
    }
  }
  
  const toggleMute = () => {
    if (videoPlayer.value) {
      videoPlayer.value.muted = !videoPlayer.value.muted
      isMuted.value = videoPlayer.value.muted
    }
  }
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoPlayer.value.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }
  
  const updateProgress = () => {
    if (videoPlayer.value) {
      const percentage = (videoPlayer.value.currentTime / videoPlayer.value.duration) * 100
      progress.value = isNaN(percentage) ? 0 : percentage
    }
  }
  
  onMounted(() => {
    if (videoPlayer.value) {
      videoPlayer.value.addEventListener('timeupdate', updateProgress)
      videoPlayer.value.addEventListener('ended', () => {
        isPlaying.value = false
      })
    }
  })
  
  onUnmounted(() => {
    if (videoPlayer.value) {
      videoPlayer.value.removeEventListener('timeupdate', updateProgress)
      videoPlayer.value.removeEventListener('ended', () => {
        isPlaying.value = false
      })
    }
  })
  </script>
<template>
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-24">
          <div v-for="person in people" :key="person.id" class="relative rounded-2xl overflow-hidden shadow-lg">
            <!-- Video element that autoplays -->
            <video 
              class="w-full h-[400px] object-cover"
              :src="person.videoUrl"
              autoplay
              loop
              muted
              playsinline
            ></video>
            
            <!-- Name overlay -->
            <div class="absolute bottom-4 left-4">
              <div class="bg-white rounded-full px-4 py-2 shadow-md">
                <span class="font-medium text-gray-800">{{ person.name }}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Sample data structure
  interface Person {
    id: number;
    name: string;
    videoUrl: string;
  }
  
  const people: Person[] = [
    {
      id: 1,
      name: 'English',
      videoUrl: '/vd.MP4', // Replace with actual video URL
    },
    {
      id: 2,
      name: 'Football',
      videoUrl: '/vd2.MP4', // Replace with actual video URL
    },
    {
      id: 3,
      name: 'Iqtisodiyot',
      videoUrl: '/vd3.MP4', // Replace with actual video URL
    },
  ];
  </script>
  
  <style scoped>
  /* Ensure videos start playing immediately without showing controls */
  video::-webkit-media-controls-start-playback-button {
    display: none;
  }
  </style>
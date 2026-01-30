<template>
    <div>
<!-- Hero -->
<div class="relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100">
  <!-- Background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-48 left-0 -z-10">
      <div class="bg-red-200 rounded-full opacity-50 blur-3xl w-96 h-96"></div>
    </div>
    <div class="absolute top-1/2 right-0 -z-10">
      <div class="bg-red-300 rounded-full opacity-30 blur-3xl w-80 h-80"></div>
    </div>
  </div>
  
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <!-- Grid -->
    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
      <div class="lg:col-span-3">
        <div class="inline-block px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full mb-4">
          🚁 Revolutionizing Healthcare
        </div>
        <h1 class="block text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
          <span class="block">Atmos</span>
          <span class="block bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Aid</span>
        </h1>
        <p class="mt-4 text-xl text-gray-700 font-medium">Where the sky becomes a lifeline. Fast medical aid to remote and war-affected communities.</p>

        <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div class="w-full sm:w-80">
            <label for="hero-input" class="sr-only">Email</label>
            <input type="email" id="hero-input" name="hero-input" class="py-4 sm:py-5 px-6 block w-full bg-white border-2 border-red-200 rounded-xl sm:text-base text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-red-500 shadow-lg focus:shadow-xl transition-shadow duration-300" placeholder="Enter your email">
          </div>
          <a class="w-full sm:w-auto py-4 px-8 inline-flex justify-center text-white items-center gap-x-3 text-lg font-bold rounded-xl border border-transparent bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" href="#">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Launch Experience
          </a>
        </div>

        <!-- Stats -->
        <div class="mt-12 grid grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-red-700">30min</div>
            <div class="text-sm text-gray-600 mt-1">Avg. Response Time</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-red-700">10k+</div>
            <div class="text-sm text-gray-600 mt-1">Lives Saved</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-red-700">50+</div>
            <div class="text-sm text-gray-600 mt-1">Communities Served</div>
          </div>
        </div>

        <!-- Brands -->
        <div class="mt-12">
          <span class="text-sm font-medium text-gray-700 uppercase tracking-wide">Trusted by leading institutions</span>

          <div class="mt-6 flex flex-wrap justify-center gap-12 sm:gap-16">
            <div class="flex flex-col items-center">
              <img src="../../assets/smu-logo.png" class="h-24 w-auto" width="106" alt="South Mediterranean University">
              <span class="mt-2 text-xs text-gray-600">University Partner</span>
            </div>
            <!-- <div class="flex flex-col items-center">
              <img src="../../assets/hultprize.png" class="h-10 w-auto" width="106" alt="Hult Prize">
              <span class="mt-2 text-xs text-gray-600">Award Winner</span>
            </div> -->
          </div>
        </div>
        <!-- End Brands -->
      </div>
      <!-- End Col -->

      <div class="lg:col-span-4 mt-16 lg:mt-0 relative">
        <div class="relative">
          <div class="absolute -top-10 -right-10 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div class="absolute top-10 -left-10 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div class="absolute -bottom-10 right-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" src="../../assets/drone.jpeg" alt="Medical Drone Delivery">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Hero -->

<!-- Problem Section -->
<section class="py-16 bg-gray-50" id="problem">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">Life-Threatening Delays in Emergency Care</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">Emergency care delayed in rural & crisis areas. Ambulances slow, expensive, infrastructure-dependent.</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Rural Communities</h3>
        <p class="text-muted-foreground-1">Hard-to-reach residents lack access to emergency medical care</p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Disaster Zones</h3>
        <p class="text-muted-foreground-1">Emergency care disrupted in crisis areas</p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Low-Income Populations</h3>
        <p class="text-muted-foreground-1">High healthcare costs prevent timely treatment</p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Local Clinics</h3>
        <p class="text-muted-foreground-1">Lack insulin, blood, emergency tools</p>
      </div>
    </div>
  </div>
</section>
<!-- End Problem Section -->

<!-- Solution Section -->
<section class="py-16" id="solution">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold text-foreground md:text-4xl">Our Innovative Solution</h2>
        <p class="mt-4 text-lg text-muted-foreground-1">Drone delivery with guided self-care combining logistics + medical guidance for areas with low infrastructure.</p>
        
        <div class="mt-8 space-y-6">
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-foreground">Medical Drone Delivery Network</h3>
              <p class="mt-1 text-muted-foreground-1">Supplies delivered in 10–30 minutes</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-foreground">Guided Self-Care</h3>
              <p class="mt-1 text-muted-foreground-1">Via in-app medical videos + live operator support</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-foreground">Quick Access to Supplies</h3>
              <p class="mt-1 text-muted-foreground-1">Wide range of supplies and tools in minutes</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="flex-shrink-0 mt-1">
              <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-foreground">Hospital Outreach</h3>
              <p class="mt-1 text-muted-foreground-1">Improved transportation services</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lg:text-right">
        <img class="rounded-xl shadow-lg" src="../../assets/DSC00040.jpg" alt="Medical Drone Solution">
      </div>
    </div>
  </div>
</section>
<!-- End Solution Section -->

<!-- Team Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">Meet Our Team</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">The passionate individuals driving AtmosAid's mission forward</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Team Member 1 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div class="relative">
          <img src="../../assets/allam2.jpeg" alt="Muhammad Alallam" class="w-full h-auto object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-foreground text-center">Muhammad Alallam</h3>
          <p class="text-red-600 font-medium text-center mt-1">Operations & Strategy Lead</p>
          <p class="mt-3 text-sm text-muted-foreground-1 text-center">Organizes meetings, sets business workflow, ensures plans and team progress, decides strategies</p>
        </div>
      </div>
      
      <!-- Team Member 2 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div class="relative">
          <img src="../../assets/ansam2.jpeg" alt="Ansam Elwaer" class="w-full h-auto object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-foreground text-center">Ansam Elwaer</h3>
          <p class="text-red-600 font-medium text-center mt-1">Public Relations & Partnerships Lead</p>
          <p class="mt-3 text-sm text-muted-foreground-1 text-center">Speaks for the team, manages outreach, builds partnerships, plans, coordinates operations</p>
        </div>
      </div>
      
      <!-- Team Member 3 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div class="relative">
          <img src="../../assets/reda.jpeg" alt="Reda Elalous" class="w-full h-auto object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-foreground text-center">Reda Elalous</h3>
          <p class="text-red-600 font-medium text-center mt-1">Marketing & Finance Lead</p>
          <p class="mt-3 text-sm text-muted-foreground-1 text-center">Overseas marketing strategy, manages budget, and financial planning</p>
        </div>
      </div>
      
      <!-- Team Member 4 -->
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div class="relative">
          <img src="../../assets/abdullah.jpeg" alt="Abdullah" class="w-full h-auto object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-foreground text-center">Abdullah</h3>
          <p class="text-red-600 font-medium text-center mt-1">Technical & Prototype Lead</p>
          <p class="mt-3 text-sm text-muted-foreground-1 text-center">Leads drone development, manages prototypes and technical systems</p>
        </div>
      </div>
    </div>
    
    <div class="mt-16 text-center">
      <div class="inline-block p-6 bg-white rounded-2xl shadow-lg">
        <h3 class="text-xl font-bold text-foreground">Institution</h3>
        <p class="mt-2 text-lg text-muted-foreground-1">Supported by South Mediterranean University</p>
        <div class="mt-4">
          <img src="../../assets/smu-logo.png" class="w-32 h-auto mx-auto" alt="South Mediterranean University">
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Team Section -->

<!-- Competitive Advantage Section -->
<section class="py-16" id="advantage">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">Our Competitive Advantage</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">What makes AtmosAid special in the market</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-8 rounded-xl shadow-sm">
        <h3 class="text-xl font-semibold text-foreground mb-4">What Makes AtmosAid Unique</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Guided self-treatment training</strong> for users</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Direct connection with the patient</strong> for personalized care</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Real-time drone audio/video support</strong> during emergencies</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Rural & crisis-ready design</strong>, more emergency focused</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Local and community based</strong> approach</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Quick and immediate action</strong> whenever needed</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-8 rounded-xl shadow-sm">
        <h3 class="text-xl font-semibold text-foreground mb-4">Early Traction</h3>
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-foreground">Partner discussions with clinics</h4>
              <p class="text-sm text-muted-foreground-1 mt-1">Engaging with local healthcare providers to establish partnerships</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m0-10L4 7m8 4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-foreground">Supplier sourcing</h4>
              <p class="text-sm text-muted-foreground-1 mt-1">Identifying and securing suppliers for medical supplies and equipment</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-foreground">Pilot region planning</h4>
              <p class="text-sm text-muted-foreground-1 mt-1">Selecting optimal locations for initial drone station deployment</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <h4 class="font-medium text-foreground">Early advertising and funding requests</h4>
              <p class="text-sm text-muted-foreground-1 mt-1">Building awareness and securing initial funding for operations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Competitive Advantage Section -->

<!-- Go-to-Market Strategy Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">Go-To-Market Strategy</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">Pilot rollout, partnerships, and customer acquisition</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Technology</h3>
        <p class="text-muted-foreground-1">Development of drone platform and medical payload systems</p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Private Clinics</h3>
        <p class="text-muted-foreground-1">Partnership with private healthcare providers for supply distribution</p>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-foreground mb-2">Community</h3>
        <p class="text-muted-foreground-1">Building trust and establishing presence in target communities</p>
      </div>
    </div>
    
    <div class="mt-12">
      <h3 class="text-xl font-semibold text-foreground text-center mb-6">Partnerships</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Ministries of Health</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">NGOs & Humanitarian Agencies</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Community Subscription Plans</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Public Hospitals</h4>
        </div>
      </div>
    </div>
    
    <div class="mt-12">
      <h3 class="text-xl font-semibold text-foreground text-center mb-6">Customer Acquisition</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Government & NGO Service Contracts</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Subscriptions for Rural Families</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Clinic-Based Sign-ups</h4>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg text-center">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h4 class="font-medium text-foreground">Community Awareness Campaigns</h4>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Go-to-Market Strategy Section -->

<!-- Roadmap Section -->
<section class="py-16" id="roadmap">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">Roadmap & Future Plans</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">Strategic milestones toward transforming emergency healthcare delivery</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      <!-- Phase 1 -->
      <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-md">
        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">Q1-Q2</div>
        <h3 class="text-xl font-bold text-foreground mb-3">Validate & Design</h3>
        <p class="text-sm text-muted-foreground-1 mb-4">Months 0–6</p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Identify priority emergency needs</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Finalize medical kits</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Select drone platform</span>
          </li>
        </ul>
      </div>
      
      <!-- Phase 2 -->
      <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-md">
        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">Q3-Q4</div>
        <h3 class="text-xl font-bold text-foreground mb-3">Prototype & Pilot</h3>
        <p class="text-sm text-muted-foreground-1 mb-4">Months 6–12</p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Build drone prototype</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Launch pilot stations</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Test real deliveries</span>
          </li>
        </ul>
      </div>
      
      <!-- Phase 3 -->
      <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-md">
        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">Y1-Y2</div>
        <h3 class="text-xl font-bold text-foreground mb-3">Early Scale</h3>
        <p class="text-sm text-muted-foreground-1 mb-4">Months 12–24</p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Expand station network</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Launch subscriptions</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Secure partnerships</span>
          </li>
        </ul>
      </div>
      
      <!-- Phase 4 -->
      <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100 shadow-sm transition-all duration-300 hover:shadow-md">
        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">Y2+</div>
        <h3 class="text-xl font-bold text-foreground mb-3">Expansion</h3>
        <p class="text-sm text-muted-foreground-1 mb-4">Months 24+</p>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Scale nationally</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Integrate with health systems</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1 text-sm">Advanced care kits</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="mt-16 pt-8 border-t border-gray-200">
      <h3 class="text-2xl font-bold text-foreground text-center mb-8">UN Sustainable Development Goals Alignment</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center transition-all duration-300 hover:scale-[1.02]">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-foreground mb-2">SDG 3</h4>
          <h5 class="text-lg font-medium text-blue-700 mb-2">Good Health & Well-Being</h5>
          <p class="text-muted-foreground-1">Faster emergency medical access and life-saving supplies delivered in minutes</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center transition-all duration-300 hover:scale-[1.02]">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-foreground mb-2">SDG 9</h4>
          <h5 class="text-lg font-medium text-blue-700 mb-2">Industry, Innovation & Infrastructure</h5>
          <p class="text-muted-foreground-1">Drone-powered health delivery network and new medical logistics infrastructure</p>
        </div>
        
        <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 text-center transition-all duration-300 hover:scale-[1.02]">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="text-xl font-semibold text-foreground mb-2">SDG 10</h4>
          <h5 class="text-lg font-medium text-blue-700 mb-2">Reduced Inequalities</h5>
          <p class="text-muted-foreground-1">Healthcare access for remote communities and equal emergency support regardless of location</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End Roadmap Section -->

<!-- How We Measure Success -->
<section class="py-16 bg-gray-50">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-foreground md:text-4xl">How We Measure Success</h2>
      <p class="mt-4 text-lg text-muted-foreground-1 max-w-3xl mx-auto">Key metrics that drive our mission forward</p>
    </div>
    
    <div class="grid md:grid-cols-5 gap-6">
      <div class="bg-red-50 p-6 rounded-xl text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="font-semibold text-foreground">Speed & Reliability</h3>
      </div>
      
      <div class="bg-red-50 p-6 rounded-xl text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="font-semibold text-foreground">Access & Coverage</h3>
      </div>
      
      <div class="bg-red-50 p-6 rounded-xl text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <h3 class="font-semibold text-foreground">Health Impact</h3>
      </div>
      
      <div class="bg-red-50 p-6 rounded-xl text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h3 class="font-semibold text-foreground">Economic Impact</h3>
      </div>
      
      <div class="bg-red-50 p-6 rounded-xl text-center">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <h3 class="font-semibold text-foreground">Community Trust</h3>
      </div>
    </div>
    
    <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-xl font-bold text-foreground mb-4">Key Performance Indicators</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Average response time:</strong> Under 30 minutes</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Delivery success rate:</strong> Over 95%</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Lives impacted:</strong> Thousands annually</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1"><strong>Customer satisfaction:</strong> Over 90%</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="text-xl font-bold text-foreground mb-4">Impact Measurement</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1">Track lives saved through emergency interventions</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1">Monitor health outcomes improvement</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1">Measure accessibility improvements</span>
          </li>
          <li class="flex items-start">
            <svg class="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-muted-foreground-1">Assess cost reduction in emergency care</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
        <h3 class="text-xl font-bold text-foreground mb-4">Success Stories</h3>
        <div class="space-y-4">
          <div class="border-l-4 border-red-600 pl-4 py-1">
            <p class="text-foreground">"Delivered critical medication in 20 minutes to a remote village during a health emergency"</p>
            <p class="text-sm text-muted-foreground-1 mt-1">- Regional Hospital Partnership</p>
          </div>
          <div class="border-l-4 border-red-600 pl-4 py-1">
            <p class="text-foreground">"Enabled prenatal care access for 500+ women in hard-to-reach communities"</p>
            <p class="text-sm text-muted-foreground-1 mt-1">- Community Health Initiative</p>
          </div>
          <div class="border-l-4 border-red-600 pl-4 py-1">
            <p class="text-foreground">"Provided life-saving insulin delivery during a regional crisis"</p>
            <p class="text-sm text-muted-foreground-1 mt-1">- Emergency Response Unit</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- End How We Measure Success -->

</div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
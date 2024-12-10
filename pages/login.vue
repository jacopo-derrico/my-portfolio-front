<template>
  <div class="flex mx-auto py-10 my-[100px] lg:py-0 lg:w-10/12 justify-center">
    <form class="flex flex-col w-1/2">
      <h3 class="text-button">Login</h3>
      <input v-model="email" placeholder="email" type="email" class="my-3">
      <input v-model="password" placeholder="password" type="password">
      <button @click="signIn" class="text-button uppercase btn-style py-3 px-5 mt-10">Log In</button>
      <p v-if="errorMessage" class="text-primary">{{ errorMessage }}</p>
      <p v-if="isLoading">Logging in...</p>
    </form>
  </div>
</template>

<!-- <script setup>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useCurrentUser } from 'vuefire'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  definePageMeta({
    middleware: ['auth-custom'],
  })

  const router = useRouter()
  const auth = getAuth()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  const isLoading = ref(false)
  const user = ref(null)



  // Sign in function
  async function signIn() {
    isLoading.value = true
    errorMessage.value = ''

    console.log(email.value)

    try {
      const cred = await signInWithEmailAndPassword(auth, email.value, password.value);

      const user = useCurrentUser();

      console.log(user)

        if (user && user.uid === 'D6UMAaEOeNVovpPrjBOWxSJfuQE3') {
          router.push('/admin')
        }

    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  }


</script> -->

<script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Firebase Auth instance
  const auth = getAuth();
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const isLoading = ref(false);
  const user = ref(null);
  
  // Event handler for form submission
  async function signIn(e) {
    e.preventDefault();
    
    isLoading.value = true;
    errorMessage.value = '';
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
      
      // Handle successful login
      user.value = userCredential.user;
      
      // Redirect to admin page
      router.push('/admin');
      isLoading.value = false;
    } catch (err) {
      const errorMessage = err.message;
      isLoading.value = false;
  
      switch (err.code) {
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/user-disabled":
          setErrorMessage(
            "This email address is disabled by the administrator."
          );
          break;
        case "auth/user-not-found":
          setErrorMessage("This email address is not registered.");
          break;
        case "auth/wrong-password":
          setErrorMessage("The password is invalid or the user does not have a password.")
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  }
  
  // Helper function to set error message
  function setErrorMessage(msg) {
    errorMessage.value = msg;
  }
  
  // Watch for auth state changes
  import { watchEffect } from 'vue';
  watchEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      user.value = newUser;
      isLoading.value = false;
    });
    
    // Clean up subscription when component unmounts
    return () => unsubscribe();
  });
  </script>
<template>
    <div class="flex mx-auto py-10 my-[100px] lg:py-0 lg:w-10/12 justify-center">
        <div class="flex flex-col text-primary">
            Welcome {{ user?.email }} {{user.role}}
        </div>
        <button @click="handleSignOut" class="text-button uppercase btn-style py-3 px-5 mt-10">Log out</button>
    </div>
</template>

<script setup>
    import { getAuth, signOut } from "firebase/auth";
    // import { getFirestore, collection } from 'firebase/firestore'
    import { ref } from 'vue';
    const user = useCurrentUser()
    const auth = getAuth();
    const firestore = getFirestore()

    // const role = firestore.collection('users').doc(user.role)

    // definePageMeta({
    //     middleware: ['auth-custom'],
    // })

    let isLoading = ref(false);

    function handleSignOut() {
        isLoading.value = true;

        try {
            signOut(auth).then(() => {
                console.log('User signed out successfully');

            });
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            isLoading.value = false;
        }

        // Redirect to admin page
        if (user === invalid) {
            router.push('/login');
        }
    }


</script>
<template>
    <div class="main-container">
        <div class="title">
            <div class="logo">
                <img src="../assets/Logo/Logo.png" alt="logo-icon" class="logo-image" />
            </div>
            <div class="site-name">Just Do It</div>
        </div>
        <div class="left-btn">
            <button class="home-btn">
                <a href="/" class="a-home">Home</a>
            </button>
            <!-- <Button name="Home" style="background-color: none !important;" /> -->
        </div>
        <div class="right-btn">
            <button type="button" class="login-btn">
                <a href="/login" class="a-login">Login</a>
            </button>
            <button type="button" class="register-btn">
                <a href="/signup" class="a-register">Sign Up</a>
            </button>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'; 
export default {
    components: {
        Button,
    }
}
</script>

<style scoped>
.main-container {
    background-color: #413e83;
    display: flex;
    /* align-content: center; */
    align-items: center;
    text-align: center;
    height: 80px;
    /* border-radius: 0;
    padding-left: 0%;
    padding-right: 0%; */
    font-family: sans-serif;
    font-size: 16px;
}

.a-login {
    color: #246BFD;
}

.a-register, .a-home {
    color: #f0f0f0;
}

a:link, a:hover, a:visited, a:active {
    /* color: red; */
    text-decoration: none;
}

.home-btn {
    background: none;
    border: none;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #f0f0f0;
    padding: 10px 38px 11px 37px;
}

.register-btn {
    background: linear-gradient(94.85deg, #246BFD 2.76%, #891BD3 99.01%);
    border: none;
    border-radius: 8px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #f0f0f0;
    padding: 10px 30px 11px 29px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.login-btn {
    background-color: #413E83;
    border-color: #246BFD;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #246BFD;
    border-style: outset;
    border-radius: 8px;
    padding: 10px 38px 11px 38px;
    text-align: center;
    align-items: center;
    margin-right: 24px;
}

.right-btn {
    display: flex;
    padding-right: 190px;
    position: absolute;
    right: 0;
}

.left-btn {
    display: flex;
    align-items: center;
    color: #f0f0f0;
    height: 40px;
    width: 120px;
}

.logo-image {
    display: block;
    padding-right: 8px;
}

.site-name {
    display: flex;
    color: #f0f0f0;
    font-weight: 700;
    align-items: center;
}

.title {
    display: flex;
    padding-left: 190px;
    padding-right: 56px;
}
</style>
plugins {
    id("org.jetbrains.kotlin.jvm")
}

repositories {
    mavenCentral()
    google()
    maven(url = "https://jitpack.io")
}

dependencies {
    constraints {
        implementation("org.apache.commons:commons-text:1.9")
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    }

    implementation("com.github.Javacord", "Javacord", "development-SNAPSHOT")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}
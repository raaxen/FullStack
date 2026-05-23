import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import avatar from "@/assets/images/avatar.png";

const { width, height } = Dimensions.get('window');
const isMobile = width < 600;

const ACCENT = '#60a5fa';
const BG     = '#0f172a';

const Home = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerAnim  = useRef(new Animated.Value(-300)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const textFade    = useRef(new Animated.Value(0)).current;
  const textSlide   = useRef(new Animated.Value(30)).current;
  const avatarScale = useRef(new Animated.Value(0.8)).current;
  const avatarFade  = useRef(new Animated.Value(0)).current;
  const glowAnim    = useRef(new Animated.Value(0.4)).current;
  const iconAnims   = [0,1,2,3].map(() => useRef(new Animated.Value(0)).current);
  const iconScales  = [0,1,2,3].map(() => useRef(new Animated.Value(1)).current);
  const btnScale    = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    // Glow pulsant en boucle
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, { toValue: 1,   duration: 2000, useNativeDriver: true }),
        Animated.timing(glowAnim, { toValue: 0.4, duration: 2000, useNativeDriver: true }),
      ])
    ).start();

    // Entrée
    Animated.sequence([
      Animated.parallel([
        Animated.timing(avatarFade,  { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.spring(avatarScale, { toValue: 1, friction: 6, tension: 50, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(textFade,  { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.spring(textSlide, { toValue: 0, friction: 8, tension: 50, useNativeDriver: true }),
      ]),
      Animated.stagger(80, iconAnims.map(a =>
        Animated.spring(a, { toValue: 1, friction: 5, tension: 80, useNativeDriver: true })
      )),
    ]).start();
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    Animated.parallel([
      Animated.spring(drawerAnim,  { toValue: 0,   friction: 7, tension: 60, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0.5, duration: 300, useNativeDriver: true }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.spring(drawerAnim,  { toValue: -300, friction: 7, tension: 60, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0,    duration: 300, useNativeDriver: true }),
    ]).start(() => setMenuOpen(false));
  };

  const navigate = (route: string) => {
    closeMenu();
    setTimeout(() => router.push(route as any), 300);
  };

  const links = [
    { label: 'Home',    route: '/(tabs)/home',    icon: 'home-outline' },
    { label: 'About',   route: '/(tabs)/about',   icon: 'person-outline' },
    { label: 'Project', route: '/(tabs)/project', icon: 'code-slash-outline' },
    { label: 'Contact', route: '/(tabs)/contact', icon: 'mail-outline' },
  ];

  const socials = [
    { name: 'logo-instagram' },
    { name: 'logo-facebook'  },
    { name: 'logo-linkedin'  },
    { name: 'logo-github'    },
  ];

  return (
    <View style={styles.body}>

      {/* ── Gradient radial background ── */}
      <LinearGradient
        colors={[`${ACCENT}22`, `${ACCENT}08`, BG]}
        start={{ x: 0.5, y: 0.3 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Cercle lumineux derrière avatar */}
      <Animated.View style={[styles.glowCircle, { opacity: glowAnim }]} />

      {/* ── Navbar ── */}
      <View style={styles.nav}>
        <Text style={styles.navTitle}>Ny Avo Nekena</Text>
        {isMobile ? (
          <TouchableOpacity onPress={openMenu}>
            <Ionicons name="menu-outline" size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={styles.navLinks}>
            {links.map(link => (
              <TouchableOpacity key={link.label} onPress={() => router.push(link.route as any)}>
                <Text style={styles.navText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* ── Drawer ── */}
      {menuOpen && (
        <>
          <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={closeMenu} />
          </Animated.View>
          <Animated.View style={[styles.drawer, { transform: [{ translateX: drawerAnim }] }]}>
            <View style={styles.drawerHeader}>
              <Text style={styles.drawerTitle}>Menu</Text>
              <TouchableOpacity onPress={closeMenu}>
                <Ionicons name="close" size={26} color="white" />
              </TouchableOpacity>
            </View>
            {links.map(link => (
              <TouchableOpacity key={link.label} style={styles.drawerLink} onPress={() => navigate(link.route)}>
                <Ionicons name={link.icon as any} size={20} color="white" style={{ marginRight: 14 }} />
                <Text style={styles.drawerText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        </>
      )}

      {/* ── Contenu principal ── */}
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Avatar flottant */}
        <Animated.View style={[
          styles.avatarWrapper,
          { opacity: avatarFade, transform: [{ scale: avatarScale }] }
        ]}>
          {/* Anneau extérieur */}
          <LinearGradient
            colors={[ACCENT, `${ACCENT}44`, 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.avatarRingOuter}
          />
          {/* Anneau intérieur */}
          <View style={styles.avatarRingInner}>
            <Image source={avatar} style={styles.avatarImage} />
          </View>
        </Animated.View>

        {/* Texte */}
        <Animated.View style={[
          styles.textBlock,
          { opacity: textFade, transform: [{ translateY: textSlide }] }
        ]}>
          <Text style={styles.tag}>✦  FULL-STACK DEVELOPER</Text>

          <Text style={styles.firstName}>Tanjon'ny Avo</Text>
          <Text style={styles.lastName}>Nekena</Text>

          <View style={styles.line} />

          <Text style={styles.desc}>
            Passionate about crafting seamless digital experiences — from pixel-perfect interfaces to robust back-end systems. Let's build something great together.
          </Text>

          {/* Socials */}
          <View style={styles.socialRow}>
            {socials.map((s, i) => (
              <Animated.View key={i} style={{
                opacity: iconAnims[i],
                transform: [{ scale: Animated.multiply(iconAnims[i], iconScales[i]) }]
              }}>
                <TouchableOpacity
                  style={styles.socialBtn}
                  onPressIn={() => Animated.spring(iconScales[i], { toValue: 0.82, useNativeDriver: true }).start()}
                  onPressOut={() => Animated.spring(iconScales[i], { toValue: 1, friction: 3, useNativeDriver: true }).start()}
                  activeOpacity={1}
                >
                  <Ionicons name={s.name as any} size={18} color={ACCENT} />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>

          {/* Boutons */}
          <View style={styles.btnRow}>
            <Animated.View style={{ transform: [{ scale: btnScale }] }}>
              <TouchableOpacity
                onPressIn={() => Animated.spring(btnScale, { toValue: 0.95, useNativeDriver: true }).start()}
                onPressOut={() => Animated.spring(btnScale, { toValue: 1, friction: 3, useNativeDriver: true }).start()}
                onPress={() => router.push('/(tabs)/project' as any)}
                activeOpacity={1}
              >
                <LinearGradient
                  colors={[ACCENT, '#3b82f6']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.btnPrimary}
                >
                  <Text style={styles.btnPrimaryText}>See Portfolio</Text>
                  <Ionicons name="arrow-forward" size={15} color="white" style={{ marginLeft: 6 }} />
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>

            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => router.push('/(tabs)/contact' as any)}
            >
              <Text style={styles.btnSecondaryText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

      </ScrollView>
    </View>
  );
}

const AVATAR_SIZE = isMobile ? 200 : 260;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: BG,
  },

  // Glow derrière avatar
  glowCircle: {
    position: 'absolute',
    width: AVATAR_SIZE + 120,
    height: AVATAR_SIZE + 120,
    borderRadius: (AVATAR_SIZE + 120) / 2,
    backgroundColor: `${ACCENT}18`,
    top: isMobile ? height * 0.1 : height * 0.12,
    alignSelf: 'center',
    zIndex: 0,
  },

  // Navbar
  nav: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: isMobile ? 64 : 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: isMobile ? 20 : 48,
    justifyContent: 'space-between',
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  navTitle: {
    color: 'white',
    fontSize: isMobile ? 16 : 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  navLinks: { flexDirection: 'row', gap: 36 },
  navText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },

  // Overlay & Drawer
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'black',
    zIndex: 20,
  },
  drawer: {
    position: 'absolute',
    top: 0, left: 0,
    width: 260, height: '100%',
    backgroundColor: BG,
    zIndex: 30,
    paddingTop: 60, paddingHorizontal: 24,
    elevation: 20,
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 36,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    paddingBottom: 16,
  },
  drawerTitle: { color: 'white', fontSize: 20, fontWeight: '700' },
  drawerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  drawerText: { color: 'white', fontSize: 16, fontWeight: '500' },

  // Scroll
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: isMobile ? 90 : 100,
    paddingBottom: 60,
    paddingHorizontal: isMobile ? 24 : 80,
  },

  // Avatar
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  avatarRingOuter: {
    position: 'absolute',
    width: AVATAR_SIZE + 16,
    height: AVATAR_SIZE + 16,
    borderRadius: (AVATAR_SIZE + 16) / 2,
  },
  avatarRingInner: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: `${ACCENT}88`,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Texte
  textBlock: {
    width: '100%',
    maxWidth: 520,
    alignItems: 'center',
  },
  tag: {
    fontSize: 11,
    fontWeight: '700',
    color: ACCENT,
    letterSpacing: 3,
    marginBottom: 16,
  },
  firstName: {
    fontSize: isMobile ? 34 : 48,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  lastName: {
    fontSize: isMobile ? 38 : 54,
    fontWeight: '800',
    fontStyle: 'italic',
    color: ACCENT,
    textAlign: 'center',
    marginBottom: 18,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: ACCENT,
    marginBottom: 20,
    opacity: 0.6,
  },
  desc: {
    fontSize: isMobile ? 14 : 15,
    color: 'rgba(255,255,255,0.55)',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 28,
  },

  // Socials
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },
  socialBtn: {
    width: 42, height: 42,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: `${ACCENT}44`,
    backgroundColor: `${ACCENT}11`,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Boutons
  btnRow: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  btnPrimaryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  btnSecondary: {
    borderWidth: 1,
    borderColor: `${ACCENT}44`,
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 8,
    backgroundColor: `${ACCENT}0a`,
  },
  btnSecondaryText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Home;
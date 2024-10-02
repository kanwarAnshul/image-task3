import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleSwitch = () => setNotificationsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={24} color="#007bff" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="key-outline" size={24} color="#007bff" />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>

        <View style={styles.option}>
          <Ionicons name="notifications-outline" size={24} color="#007bff" />
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleSwitch}
            trackColor={{ false: '#767577', true: '#007bff' }}
            thumbColor={notificationsEnabled ? '#ffffff' : '#f4f4f4'}
          />
        </View>
      </View>

      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="shield-outline" size={24} color="#007bff" />
          <Text style={styles.optionText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#ffffff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1, // Slight shadow for better visual effect
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  logoutText: {
    fontSize: 18,
    color: '#ffffff',
    marginLeft: 10,
  },
});

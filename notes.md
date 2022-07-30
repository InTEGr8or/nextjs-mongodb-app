## MongoDB

27017: The default port for mongod and mongos instances. You can change this port with port or --port.
27018: The default port for mongod when running with --shardsvr command-line option or the shardsvr value for the clusterRole setting in a configuration file.
27019: The default port for mongod when running with --configsvr command-line option or the configsvr value for the clusterRole setting in a configuration file.
27020: The default port from which mongocryptd listens for messages. mongocryptd is installed with MongoDB Enterprise Server (version 4.2 and later) and supports automatic encryption operations.

## Form Post Transit

The first CRUD modification I've done is adding user.website to the user post.

This is the minimal change-set:

Commit: [c9584cc](https://github.com/InTEGr8or/nextjs-mongodb-app/commit/c9584ccad0b0c5dd93d53e5544f4e70f6a4807a6)


[[api-lib/constants.js]]:
- add `website: { type: 'string', minLength: 12}` to `ValidateProps`

[[api-lib/user.js]]:
- Add `website` to `insertUser()`

[[page-components/Settings/index.jsx]]
- `const websiteRef = useRef();`

```diff
@@ -110,6 +110,7 @@ const AboutYou = ({ user, mutate }) => {
   const usernameRef = useRef();
   const nameRef = useRef();
   const bioRef = useRef();
+  const websiteRef = useRef();
   const profilePictureRef = useRef();

   const [avatarHref, setAvatarHref] = useState(user.profilePicture);
@@ -134,6 +135,7 @@ const AboutYou = ({ user, mutate }) => {
         formData.append('username', usernameRef.current.value);
         formData.append('name', nameRef.current.value);
         formData.append('bio', bioRef.current.value);
+        formData.append('website', websiteRef.current.value);
         if (profilePictureRef.current.files[0]) {
           formData.append('profilePicture', profilePictureRef.current.files[0]);
         }
@@ -156,6 +158,7 @@ const AboutYou = ({ user, mutate }) => {
     usernameRef.current.value = user.username;
     nameRef.current.value = user.name;
     bioRef.current.value = user.bio;
+    websiteRef.current.value = user.website;
     profilePictureRef.current.value = '';
     setAvatarHref(user.profilePicture);
   }, [user]);
@@ -170,6 +173,8 @@ const AboutYou = ({ user, mutate }) => {
         <Spacer size={0.5} axis="vertical" />
         <Textarea ref={bioRef} label="Your Bio" />
         <Spacer size={0.5} axis="vertical" />
+        <Input ref={websiteRef} label="Company Website" />
+        <Spacer size={0.5} axis="vertical" />
         <span className={styles.label}>Your Avatar</span>
         <div className={styles.avatar}>
           <Avatar size={96} username={user.username} url={avatarHref} />
```


[[pages/api/user/index.js]]

```diff
@@ -40,6 +40,7 @@ handler.patch(
       username: ValidateProps.user.username,
       name: ValidateProps.user.name,
       bio: ValidateProps.user.bio,
+      website: ValidateProps.user.website
     },
     additionalProperties: true,
   }),
@@ -60,7 +61,7 @@ handler.patch(
       });
       profilePicture = image.secure_url;
     }
-    const { name, bio } = req.body;
+    const { name, bio, website } = req.body;

     let username;

@@ -80,6 +81,7 @@ handler.patch(
     const user = await updateUserById(db, req.user._id, {
       ...(username && { username }),
       ...(name && { name }),
+      ...(website && { website }),
       ...(typeof bio === 'string' && { bio }),
       ...(profilePicture && { profilePicture }),
     });

```
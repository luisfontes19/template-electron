{
  "targets": [
    {
      "target_name": "autotype_target",
      "conditions": [
	      ['OS == "mac"', {
		      'include_dirs': [
            'System/Library/Frameworks/CoreFoundation.Framework/Headers',
            'System/Library/Frameworks/Carbon.Framework/Headers',
          ],
          "link_settings": {
            "libraries": [
              "-framework Carbon",
              "-framework CoreFoundation"
            ]
          }
        }]
      ],
      "sources": [ "./src/autotype_macos.cc" ]
    }
  ],
}
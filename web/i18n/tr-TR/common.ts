const translation = {
    api: {
        success: 'Başarılı',
        actionSuccess: 'İşlem başarılı',
        saved: 'Kaydedildi',
        create: 'Oluşturuldu',
        remove: 'Kaldırıldı',
    },
    operation: {
        create: 'Oluştur',
        confirm: 'Onayla',
        cancel: 'İptal',
        clear: 'Temizle',
        save: 'Kaydet',
        saveAndEnable: 'Kaydet ve Etkinleştir',
        edit: 'Düzenle',
        add: 'Ekle',
        added: 'Eklendi',
        refresh: 'Yeniden Başlat',
        reset: 'Sıfırla',
        search: 'Ara',
        change: 'Değiştir',
        remove: 'Kaldır',
        send: 'Gönder',
        copy: 'Kopyala',
        lineBreak: 'Satır sonu',
        sure: 'Eminim',
        download: 'İndir',
        delete: 'Sil',
        settings: 'Ayarlar',
        setup: 'Kurulum',
        getForFree: 'Ücretsiz al',
        reload: 'Yeniden yükle',
        ok: 'Tamam',
        log: 'Günlük',
        learnMore: 'Daha Fazla Bilgi',
        params: 'Parametreler',
        duplicate: 'Çoğalt',
        rename: 'Yeniden adlandır',
    },
    errorMsg: {
        fieldRequired: '{{field}} gerekli',
        urlError: 'URL http:// veya https:// ile başlamalıdır',
    },
    placeholder: {
        input: 'Lütfen girin',
        select: 'Lütfen seçin',
    },
    voice: {
        language: {
            zhHans: 'Çince',
            zhHant: 'Geleneksel Çince',
            enUS: 'İngilizce',
            deDE: 'Almanca',
            frFR: 'Fransızca',
            esES: 'İspanyolca',
            itIT: 'İtalyanca',
            thTH: 'Tayca',
            idID: 'Endonezce',
            jaJP: 'Japonca',
            koKR: 'Korece',
            ptBR: 'Portekizce',
            ruRU: 'Rusça',
            ukUA: 'Ukraynaca',
            viVN: 'Vietnamca',
            plPL: 'Lehçe',
        },
    },
    unit: {
        char: 'karakter',
    },
    actionMsg: {
        noModification: 'Şu anda değişiklik yok.',
        modifiedSuccessfully: 'Başarıyla değiştirildi',
        modifiedUnsuccessfully: 'Değiştirilemedi',
        copySuccessfully: 'Başarıyla kopyalandı',
        paySucceeded: 'Ödeme başarılı',
        payCancelled: 'Ödeme iptal edildi',
        generatedSuccessfully: 'Başarıyla oluşturuldu',
        generatedUnsuccessfully: 'Oluşturulamadı',
    },
    model: {
        params: {
            temperature: 'Sıcaklık',
            temperatureTip:
                'Rastgeleliği kontrol eder: Düşürmek daha az rastgele tamamlamalara yol açar. Sıcaklık sıfıra yaklaştıkça, model deterministik ve tekrarlayıcı hale gelecektir.',
            top_p: 'Üst P',
            top_pTip:
                'Çekirdek örnekleme yoluyla çeşitliliği kontrol eder: 0.5, olasılık ağırlıklı tüm seçeneklerin yarısının dikkate alındığı anlamına gelir.',
            presence_penalty: 'Mevcudiyet cezası',
            presence_penaltyTip:
                'Şimdiye kadar metinde görünüp görünmediklerine bağlı olarak yeni jetonları ne kadar cezalandıracağını belirler.\nModelin yeni konular hakkında konuşma olasılığını artırır.',
            frequency_penalty: 'Frekans cezası',
            frequency_penaltyTip:
                'Şimdiye kadar metindeki mevcut sıklıklarına bağlı olarak yeni jetonları ne kadar cezalandıracağını belirler.\nModelin aynı satırı kelimesi kelimesine tekrarlama olasılığını azaltır.',
            max_tokens: 'Maksimum jeton',
            max_tokensTip:
                'Yanıtın maksimum uzunluğunu jetonlarla sınırlamak için kullanılır. \nDaha büyük değerler, istem kelimeleri, sohbet günlükleri ve Bilgi için kalan alanı sınırlayabilir. \nÜçte ikinin altına ayarlanması önerilir.\ngpt-4-1106-preview, gpt-4-vision-preview maksimum jeton (giriş 128k çıkış 4k)',
            maxTokenSettingTip: 'Maksimum jeton ayarınız yüksek, potansiyel olarak istemler, sorgular ve veriler için alanı sınırlayabilir. 2/3\'ün altına ayarlamayı düşünün.',
            setToCurrentModelMaxTokenTip: 'Maksimum jeton, mevcut modelin maksimum jetonunun %80\'ine güncellendi {{maxToken}}.',
            stop_sequences: 'Durdurma dizileri',
            stop_sequencesTip: 'API\'nin daha fazla jeton üretmeyi durduracağı en fazla dört dizi. Döndürülen metin durdurma dizisini içermeyecektir.',
            stop_sequencesPlaceholder: 'Diziyi girin ve Tab\'a basın',
        },
        tone: {
            Creative: 'Yaratıcı',
            Balanced: 'Dengeli',
            Precise: 'Kesin',
            Custom: 'Özel',
        },
        addMoreModel: 'Daha fazla model eklemek için ayarlara gidin',
    },
    menus: {
        status: 'beta',
        explore: 'Keşfet',
        apps: 'Stüdyo',
        plugins: 'Eklentiler',
        pluginsTips: 'Üçüncü taraf eklentileri entegre edin veya ChatGPT uyumlu AI-Eklentileri oluşturun.',
        datasets: 'Bilgi',
        datasetsTips: 'YAKINDA: LLM bağlam geliştirmesi için kendi metin verilerinizi içe aktarın veya Webhook aracılığıyla gerçek zamanlı veri yazın.',
        newApp: 'Yeni Uygulama',
        newDataset: 'Bilgi Oluştur',
        tools: 'Araçlar',
    },
    userProfile: {
        settings: 'Ayarlar',
        emailSupport: 'E-posta Desteği',
        workspace: 'Çalışma Alanı',
        createWorkspace: 'Çalışma Alanı Oluştur',
        helpCenter: 'Yardım',
        roadmapAndFeedback: 'Geri Bildirim',
        community: 'Topluluk',
        about: 'Hakkında',
        logout: 'Çıkış yap',
    },
    settings: {
        accountGroup: 'HESAP',
        workplaceGroup: 'ÇALIŞMA ALANI',
        account: 'Hesabım',
        members: 'Üyeler',
        billing: 'Faturalama',
        integrations: 'Entegrasyonlar',
        language: 'Dil',
        provider: 'Model Sağlayıcı',
        dataSource: 'Veri Kaynağı',
        plugin: 'Eklentiler',
        apiBasedExtension: 'API Uzantısı',
    },
    account: {
        avatar: 'Avatar',
        name: 'İsim',
        email: 'E-posta',
        password: 'Şifre',
        passwordTip: 'Geçici giriş kodları kullanmak istemiyorsanız kalıcı bir şifre belirleyebilirsiniz',
        setPassword: 'Şifre belirle',
        resetPassword: 'Şifreyi sıfırla',
        currentPassword: 'Mevcut şifre',
        newPassword: 'Yeni şifre',
        confirmPassword: 'Şifreyi onayla',
        notEqual: 'İki şifre farklı.',
        langGeniusAccount: 'Dify hesabı',
        langGeniusAccountTip: 'Dify hesabınız ve ilişkili kullanıcı verileri.',
        editName: 'İsmi Düzenle',
        showAppLength: '{{length}} uygulamayı göster',
        delete: 'Hesabı Sil',
        deleteTip: 'Hesabınızı silmek tüm verilerinizi kalıcı olarak silecek ve geri alınamayacaktır.',
        deleteConfirmTip: 'Onaylamak için lütfen kayıtlı e-postanızdan aşağıdakileri gönderin ',
    },
    members: {
        team: 'Takım',
        invite: 'Ekle',
        name: 'İSİM',
        lastActive: 'SON AKTİF',
        role: 'ROLLER',
        pending: 'Bekliyor...',
        owner: 'Sahip',
        admin: 'Yönetici',
        adminTip: 'Uygulamalar oluşturabilir ve takım ayarlarını yönetebilir',
        normal: 'Normal',
        normalTip: 'Sadece uygulamaları kullanabilir, uygulama oluşturamaz',
        builder: 'Oluşturucu',
        builderTip: 'Kendi uygulamalarını oluşturabilir ve düzenleyebilir',
        editor: 'Editör',
        editorTip: 'Uygulamaları oluşturabilir ve düzenleyebilir',
        datasetOperator: 'Bilgi Yöneticisi',
        datasetOperatorTip: 'Sadece bilgi tabanını yönetebilir',
        inviteTeamMember: 'Takım üyesi ekle',
        inviteTeamMemberTip: 'Giriş yaptıktan sonra takım verilerinize doğrudan erişebilirler.',
        email: 'E-posta',
        emailInvalid: 'Geçersiz E-posta Formatı',
        emailPlaceholder: 'Lütfen e-postaları girin',
        sendInvite: 'Davet Gönder',
        invitedAsRole: '{{role}} kullanıcı olarak davet edildi',
        invitationSent: 'Davet gönderildi',
        invitationSentTip: 'Davet gönderildi ve takım verilerinize erişmek için Dify\'a giriş yapabilirler.',
        invitationLink: 'Davet Bağlantısı',
        failedinvitationEmails: 'Aşağıdaki kullanıcılar başarıyla davet edilemedi',
        ok: 'Tamam',
        removeFromTeam: 'Takımdan çıkar',
        removeFromTeamTip: 'Takım erişimini kaldıracak',
        setAdmin: 'Yönetici olarak ayarla',
        setMember: 'Sıradan üye olarak ayarla',
        setBuilder: 'Oluşturucu olarak ayarla',
        setEditor: 'Editör olarak ayarla',
        disinvite: 'Daveti iptal et',
        deleteMember: 'Üyeyi Sil',
        you: '(Siz)',
    },
    integrations: {
        connected: 'Bağlandı',
        google: 'Google',
        googleAccount: 'Google hesabı ile giriş yap',
        github: 'GitHub',
        githubAccount: 'GitHub hesabı ile giriş yap',
        connect: 'Bağlan',
    },
    language: {
        displayLanguage: 'Görüntüleme Dili',
        timezone: 'Saat Dilimi',
    },
    provider: {
        apiKey: 'API Anahtarı',
        enterYourKey: 'API anahtarınızı buraya girin',
        invalidKey: 'Geçersiz OpenAI API anahtarı',
        validatedError: 'Doğrulama başarısız: ',
        validating: 'Anahtar doğrulanıyor...',
        saveFailed: 'API anahtarı kaydedilemedi',
        apiKeyExceedBill: 'Bu API ANAHTARININ kullanılabilir kotası yok, lütfen okuyun',
        addKey: 'Anahtar Ekle',
        comingSoon: 'Yakında',
        editKey: 'Düzenle',
        invalidApiKey: 'Geçersiz API anahtarı',
        azure: {
            apiBase: 'API Tabanı',
            apiBasePlaceholder: 'Azure OpenAI Uç Noktanızın API Taban URL\'si.',
            apiKey: 'API Anahtarı',
            apiKeyPlaceholder: 'API anahtarınızı buraya girin',
            helpTip: 'Azure OpenAI Hizmetini Öğrenin',
        },
        openaiHosted: {
            openaiHosted: 'Barındırılan OpenAI',
            onTrial: 'DENEME SÜRÜMÜNDE',
            exhausted: 'KOTA TÜKENDİ',
            desc: 'Dify tarafından sağlanan OpenAI barındırma hizmeti, GPT-3.5 gibi modelleri kullanmanıza olanak tanır. Deneme kotanız tükenmeden önce, diğer model sağlayıcılarını ayarlamanız gerekir.',
            callTimes: 'Çağrı sayısı',
            usedUp: 'Deneme kotası tükendi. Kendi Model Sağlayıcınızı ekleyin.',
            useYourModel: 'Şu anda kendi Model Sağlayıcınızı kullanıyorsunuz.',
            close: 'Kapat',
        },
        anthropicHosted: {
            anthropicHosted: 'Anthropic Claude',
            onTrial: 'DENEME SÜRÜMÜNDE',
            exhausted: 'KOTA TÜKENDİ',
            desc: 'Güçlü model, sofistike diyalog ve yaratıcı içerik üretiminden detaylı talimatlara kadar geniş bir görev yelpazesinde mükemmeldir.',
            callTimes: 'Çağrı sayısı',
            usedUp: 'Deneme kotası tükendi. Kendi Model Sağlayıcınızı ekleyin.',
            useYourModel: 'Şu anda kendi Model Sağlayıcınızı kullanıyorsunuz.',
            close: 'Kapat',
        },
        anthropic: {
            using: 'Gömme yeteneği kullanılıyor',
            enableTip: 'Anthropic modelini etkinleştirmek için önce OpenAI veya Azure OpenAI Hizmetine bağlanmanız gerekir.',
            notEnabled: 'Etkinleştirilmedi',
            keyFrom: 'API anahtarınızı Anthropic\'ten alın',
        },
        encrypted: {
            front: 'API ANAHTARINIZ şifrelenerek saklanacak ve',
            back: ' teknolojisi kullanılacaktır.',
        },
    },
    modelProvider: {
        notConfigured: 'Sistem modeli henüz tam olarak yapılandırılmadı ve bazı işlevler kullanılamayabilir.',
        systemModelSettings: 'Sistem Model Ayarları',
        systemModelSettingsLink: 'Neden bir sistem modeli kurmak gereklidir?',
        selectModel: 'Modelinizi seçin',
        setupModelFirst: 'Lütfen önce modelinizi ayarlayın',
        systemReasoningModel: {
            key: 'Sistem Çıkarım Modeli',
            tip: 'Uygulama oluşturmak için kullanılacak varsayılan çıkarım modelini ayarlayın, ayrıca diyalog adı oluşturma ve sonraki soru önerisi gibi özellikler de varsayılan çıkarım modelini kullanacaktır.',
        },
        embeddingModel: {
            key: 'Gömme Modeli',
            tip: 'Bilginin belge gömme işlemi için varsayılan modeli ayarlayın, hem Bilginin alımı hem de içe aktarılması, vektörleştirme işlemi için bu Gömme modelini kullanır. Değiştirmek, içe aktarılan Bilgi ile soru arasındaki vektör boyutunun tutarsız olmasına neden olacak ve alım başarısızlığına yol açacaktır. Alım başarısızlığından kaçınmak için lütfen bu modeli keyfi olarak değiştirmeyin.',
            required: 'Gömme Modeli gereklidir',
        },
        speechToTextModel: {
            key: 'Konuşma-Metin Modeli',
            tip: 'Konuşmada konuşma-metin girişi için varsayılan modeli ayarlayın.',
        },
        ttsModel: {
            key: 'Metin-Konuşma Modeli',
            tip: 'Konuşmada metin-konuşma girişi için varsayılan modeli ayarlayın.',
        },
        rerankModel: {
            key: 'Yeniden Sıralama Modeli',
            tip: 'Yeniden sıralama modeli, aday belge listesini kullanıcı sorgusuyla anlamsal eşleşmeye göre yeniden sıralayarak anlamsal sıralama sonuçlarını iyileştirecektir',
        },
        apiKey: 'API-ANAHTAR',
        quota: 'Kota',
        searchModel: 'Model ara',
        noModelFound: '{{model}} için model bulunamadı',
        models: 'Modeller',
        showMoreModelProvider: 'Daha fazla model sağlayıcı göster',
        selector: {
            tip: 'Bu model kaldırıldı. Lütfen bir model ekleyin veya başka bir model seçin.',
            emptyTip: 'Kullanılabilir model yok',
            emptySetting: 'Lütfen ayarlara giderek yapılandırın',
            rerankTip: 'Lütfen Yeniden Sıralama modelini ayarlayın',
        },
        card: {
            quota: 'KOTA',
            onTrial: 'Deneme Sürümünde',
            paid: 'Ücretli',
            quotaExhausted: 'Kota tükendi',
            callTimes: 'Çağrı sayısı',
            tokens: 'Jetonlar',
            buyQuota: 'Kota Satın Al',
            priorityUse: 'Öncelikli kullanım',
            removeKey: 'API Anahtarını Kaldır',
            tip: 'Öncelik ücretli kotaya verilecektir. Ücretli kota tükendikten sonra Deneme kotası kullanılacaktır.',
        },
        item: {
            deleteDesc: '{{modelName}} sistem çıkarım modelleri olarak kullanılıyor. Kaldırıldıktan sonra bazı işlevler kullanılamayacak. Lütfen onaylayın.',
            freeQuota: 'ÜCRETSİZ KOTA',
        },
        addApiKey: 'API anahtarınızı ekleyin',
        invalidApiKey: 'Geçersiz API anahtarı',
        encrypted: {
            front: 'API ANAHTARINIZ şifrelenerek saklanacak ve',
            back: ' teknolojisi kullanılacaktır.',
        },
        freeQuota: {
            howToEarn: 'Nasıl kazanılır',
        },
        addMoreModelProvider: 'DAHA FAZLA MODEL SAĞLAYICI EKLE',
        addModel: 'Model Ekle',
        modelsNum: '{{num}} Model',
        showModels: 'Modelleri Göster',
        showModelsNum: '{{num}} Modeli Göster',
        collapse: 'Daralt',
        config: 'Yapılandır',
        modelAndParameters: 'Model ve Parametreler',
        model: 'Model',
        featureSupported: '{{feature}} destekleniyor',
        callTimes: 'Çağrı sayısı',
        credits: 'Mesaj Kredileri',
        buyQuota: 'Kota Satın Al',
        getFreeTokens: 'Ücretsiz Jeton Al',
        priorityUsing: 'Öncelikli kullanım',
        deprecated: 'Kullanımdan kaldırıldı',
        confirmDelete: 'silmeyi onaylıyor musunuz?',
        quotaTip: 'Kalan kullanılabilir ücretsiz jetonlar',
        loadPresets: 'Hazır Ayarları Yükle',
        parameters: 'PARAMETRELER',
        loadBalancing: 'Yük dengeleme',
        loadBalancingDescription: 'Birden fazla kimlik bilgisi seti ile baskıyı azaltın.',
        loadBalancingHeadline: 'Yük Dengeleme',
        configLoadBalancing: 'Yük Dengelemeyi Yapılandır',
        modelHasBeenDeprecated: 'Bu model kullanımdan kaldırıldı',
        providerManaged: 'Sağlayıcı tarafından yönetilen',
        providerManagedDescription: 'Model sağlayıcı tarafından sağlanan tek kimlik bilgisi setini kullanın.',
        defaultConfig: 'Varsayılan Yapılandırma',
        apiKeyStatusNormal: 'APIKey durumu normal',
        apiKeyRateLimit: 'Oran sınırına ulaşıldı, {{seconds}}s sonra kullanılabilir',
        addConfig: 'Yapılandırma Ekle',
        editConfig: 'Yapılandırmayı Düzenle',
        loadBalancingLeastKeyWarning: 'Yük dengelemeyi etkinleştirmek için en az 2 anahtar etkinleştirilmelidir.',
        loadBalancingInfo: 'Varsayılan olarak, yük dengeleme Round-robin stratejisini kullanır. Oran sınırlama tetiklenirse, 1 dakikalık bir soğuma süresi uygulanacaktır.',
        upgradeForLoadBalancing: 'Yük Dengelemeyi etkinleştirmek için planınızı yükseltin.',
    },
    dataSource: {
        add: 'Veri kaynağı ekle',
        connect: 'Bağlan',
        configure: 'Yapılandır',
        notion: {
            title: 'Notion',
            description: 'Notion\'ı Bilgi için veri kaynağı olarak kullanma.',
            connectedWorkspace: 'Bağlı çalışma alanı',
            addWorkspace: 'Çalışma alanı ekle',
            connected: 'Bağlandı',
            disconnected: 'Bağlantı kesildi',
            changeAuthorizedPages: 'Yetkili sayfaları değiştir',
            pagesAuthorized: 'Yetkili sayfalar',
            sync: 'Senkronize et',
            remove: 'Kaldır',
            selector: {
                pageSelected: 'Seçilen Sayfalar',
                searchPages: 'Sayfaları ara...',
                noSearchResult: 'Arama sonucu yok',
                addPages: 'Sayfa ekle',
                preview: 'ÖNİZLEME',
            },
        },
        website: {
            title: 'Web sitesi',
            description: 'Web tarayıcı kullanarak web sitelerinden içerik içe aktar.',
            with: 'İle',
            configuredCrawlers: 'Yapılandırılmış tarayıcılar',
            active: 'Aktif',
            inactive: 'Etkin değil',
        },
    },
    plugin: {
        serpapi: {
            apiKey: 'API Anahtarı',
            apiKeyPlaceholder: 'API anahtarınızı girin',
            keyFrom: 'SerpAPI anahtarınızı SerpAPI Hesap Sayfasından alın',
        },
    },
    apiBasedExtension: {
        title: 'API uzantıları merkezi API yönetimi sağlar, Dify\'ın uygulamalarında kolay kullanım için yapılandırmayı basitleştirir.',
        link: 'Kendi API Uzantınızı nasıl geliştireceğinizi öğrenin.',
        linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
        add: 'API Uzantısı Ekle',
        selector: {
            title: 'API Uzantısı',
            placeholder: 'Lütfen API uzantısı seçin',
            manage: 'API Uzantılarını Yönet',
        },
        modal: {
            title: 'API Uzantısı Ekle',
            editTitle: 'API Uzantısını Düzenle',
            name: {
                title: 'İsim',
                placeholder: 'Lütfen ismi girin',
            },
            apiEndpoint: {
                title: 'API Uç Noktası',
                placeholder: 'Lütfen API uç noktasını girin',
            },
            apiKey: {
                title: 'API anahtarı',
                placeholder: 'Lütfen API anahtarını girin',
                lengthError: 'API anahtarı uzunluğu 5 karakterden az olamaz',
            },
        },
        type: 'Tür',
    },
    about: {
        changeLog: 'Değişiklik günlüğü',
        updateNow: 'Şimdi güncelle',
        nowAvailable: 'Dify {{version}} artık kullanılabilir.',
        latestAvailable: 'Dify {{version}} mevcut en son sürümdür.',
    },
    appMenus: {
        overview: 'İzleme',
        promptEng: 'Düzenleme',
        apiAccess: 'API Erişimi',
        logAndAnn: 'Günlükler ve Duyurular',
        logs: 'Günlükler',
    },
    environment: {
        testing: 'TEST',
        development: 'GELİŞTİRME',
    },
    appModes: {
        completionApp: 'Metin Oluşturucu',
        chatApp: 'Sohbet Uygulaması',
    },
    datasetMenus: {
        documents: 'Belgeler',
        hitTesting: 'Alım Testi',
        settings: 'Ayarlar',
        emptyTip: 'Bilgi ilişkilendirilmedi, lütfen ilişkilendirmeyi tamamlamak için uygulamaya veya eklentiye gidin.',
        viewDoc: 'Belgeleri görüntüle',
        relatedApp: 'bağlantılı uygulamalar',
    },
    voiceInput: {
        speaking: 'Şimdi konuşun...',
        converting: 'Metne dönüştürülüyor...',
        notAllow: 'mikrofon yetkilendirilmedi',
    },
    modelName: {
        'gpt-3.5-turbo': 'GPT-3.5-Turbo',
        'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
        'gpt-4': 'GPT-4',
        'gpt-4-32k': 'GPT-4-32K',
        'text-davinci-003': 'Text-Davinci-003',
        'text-embedding-ada-002': 'Text-Embedding-Ada-002',
        'whisper-1': 'Whisper-1',
        'claude-instant-1': 'Claude-Instant',
        'claude-2': 'Claude-2',
    },
    chat: {
        renameConversation: 'Konuşmayı Yeniden Adlandır',
        conversationName: 'Konuşma adı',
        conversationNamePlaceholder: 'Lütfen konuşma adını girin',
        conversationNameCanNotEmpty: 'Konuşma adı gerekli',
        citation: {
            title: 'ALINTILAR',
            linkToDataset: 'Bilgiye Bağlantı',
            characters: 'Karakterler:',
            hitCount: 'Erişim sayısı:',
            vectorHash: 'Vektör hash:',
            hitScore: 'Erişim Puanı:',
        },
    },
    promptEditor: {
        placeholder: 'İstem kelimelerinizi buraya yazın, değişken eklemek için \'{\' girin, istem içerik bloğu eklemek için \'/\' girin',
        context: {
            item: {
                title: 'Bağlam',
                desc: 'Bağlam şablonu ekle',
            },
            modal: {
                title: 'Bağlamda {{num}} Bilgi',
                add: 'Bağlam Ekle ',
                footer: 'Bağlamları aşağıdaki Bağlam bölümünde yönetebilirsiniz.',
            },
        },
        history: {
            item: {
                title: 'Konuşma Geçmişi',
                desc: 'Geçmiş mesaj şablonu ekle',
            },
            modal: {
                title: 'ÖRNEK',
                user: 'Merhaba',
                assistant: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
                edit: 'Konuşma Rol İsimlerini Düzenle',
            },
        },
        variable: {
            item: {
                title: 'Değişkenler & Harici Araçlar',
                desc: 'Değişkenler & Harici Araçlar Ekle',
            },
            outputToolDisabledItem: {
                title: 'Değişkenler',
                desc: 'Değişkenler Ekle',
            },
            modal: {
                add: 'Yeni değişken',
                addTool: 'Yeni araç',
            },
        },
        query: {
            item: {
                title: 'Sorgu',
                desc: 'Kullanıcı sorgu şablonu ekle',
            },
        },
        existed: 'İstemde zaten mevcut',
    },
    imageUploader: {
        uploadFromComputer: 'Bilgisayardan Yükle',
        uploadFromComputerReadError: 'Resim okuma başarısız oldu, lütfen tekrar deneyin.',
        uploadFromComputerUploadError: 'Resim yükleme başarısız oldu, lütfen tekrar yükleyin.',
        uploadFromComputerLimit: 'Yüklenen resimler {{size}} MB\'ı geçemez',
        pasteImageLink: 'Resim bağlantısını yapıştır',
        pasteImageLinkInputPlaceholder: 'Resim bağlantısını buraya yapıştırın',
        pasteImageLinkInvalid: 'Geçersiz resim bağlantısı',
        imageUpload: 'Resim Yükleme',
    },
    tag: {
        placeholder: 'Tüm Etiketler',
        addNew: 'Yeni etiket ekle',
        noTag: 'Etiket yok',
        noTagYet: 'Henüz etiket yok',
        addTag: 'Etiket ekle',
        editTag: 'Etiketleri düzenle',
        manageTags: 'Etiketleri Yönet',
        selectorPlaceholder: 'Aramak veya oluşturmak için yazın',
        create: 'Oluştur',
        delete: 'Etiketi sil',
        deleteTip: 'Etiket kullanılıyor, silinsin mi?',
        created: 'Etiket başarıyla oluşturuldu',
        failed: 'Etiket oluşturma başarısız oldu',
    },
}

export default translation

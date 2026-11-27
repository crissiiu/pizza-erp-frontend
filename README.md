# React + TypeScript + Vite
src/
├── app/                      # Cấu hình lõi của ứng dụng
│   ├── providers/            # QueryClientProvider, Antd ConfigProvider, AuthProvider
│   ├── router/               # Cấu hình Route, PrivateRoute, PermissionGuard
│   └── App.tsx
├── shared/                   # TẤT CẢ NHỮNG GÌ DÙNG CHUNG (Xây dựng giai đoạn 1)
│   ├── api/                  # Axios instance, interceptors, hàm downloadFile (blob)
│   ├── components/           # UI tái sử dụng: AppTable, FormInput, PageContainer, PermissionWrapper
│   ├── constants/            # Enum, API endpoints, mã quyền (PERMISSIONS)
│   ├── hooks/                # Custom hooks dùng chung: useDebounce, useExportReport, usePermission
│   ├── layouts/              # MainLayout (Sidebar + Header + Breadcrumb), AuthLayout
│   ├── stores/               # Zustand stores (useAuthStore, useAppStore)
│   ├── types/                # TypeScript interfaces dùng chung (ApiResponse, PaginationParams, PagedResult)
│   └── utils/                # Format tiền tệ (VND), ngày tháng (dayjs), xử lý chuỗi
├── features/                 # CÁC MODULE NGHIỆP VỤ (Xây dựng giai đoạn 2)
│   ├── auth/                 # Đăng nhập, đổi mật khẩu, quên mật khẩu
│   ├── users/                # Quản lý nhân sự, phân quyền
│   ├── inventory/            # Ví dụ: Quản lý kho (components, api, schemas, types, pages)
│   └── reports/              # Module báo cáo tổng hợp
└── main.tsx
import { useEffect, useState, type FormEvent, type ReactNode } from "react"

type IconName = "heart" | "home" | "users" | "chart" | "bell" | "history" | "settings" | "search" | "plus" | "arrow" | "chevron" | "weight" | "pressure" | "pulse" | "wifi" | "check" | "close" | "calendar" | "logout" | "shield" | "help" | "download" | "edit"
const paths: Record<IconName, ReactNode> = {
  heart: (
    <>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      <path d="M4 12h4l2-4 3 8 2-4h5" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7M5 9v12h14V9" />
      <path d="M9 21v-8h6v8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v18h17M8 16v-5M13 16V6M18 16V9" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  history: (
    <>
      <path d="M3 10a9 9 0 1 1 2 8M3 4v6h6M12 7v5l3 2" />
    </>
  ),
  settings: (
    <>
      <path d="m9 3-1 3-3 1 1 3-2 2 2 2-1 3 3 1 1 3h6l1-3 3-1-1-3 2-2-2-2 1-3-3-1-1-3Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  weight: (
    <>
      <rect x="4" y="4" width="16" height="17" rx="4" />
      <path d="M8 9a4 4 0 0 1 8 0M12 6v3" />
    </>
  ),
  pressure: (
    <>
      <path d="M9 14c-6-1-6-10-1-10 5 0 4 7 1 10Zm0 0c-1 5 3 7 5 5l5-6M15 10c-5-1-5-8-1-8 4 0 4 6 1 8Z" />
      <circle cx="19" cy="11" r="2" />
    </>
  ),
  pulse: <path d="M2 12h5l3-8 4 16 3-8h5" />,
  wifi: (
    <>
      <path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0" />
      <circle cx="12" cy="20" r="1" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M7 3v4M17 3v4M3 11h18M8 15h2M14 15h2" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4H4v16h6M10 12h11m-4-4 4 4-4 4" />
    </>
  ),
  shield: (
    <>
      <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8a3 3 0 1 1 4 3c-1 1-1 2-1 3M12 17h.01" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
    </>
  ),
  edit: (
    <>
      <path d="m15 4 5 5M4 20l5-1L21 7l-5-5L4 14Z" />
    </>
  ),
}
function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
type Member = {
  id: number
  name: string
  age: number
  height: number
  weight: number
  gender: string
  birth: string
  avatar: number
}
type Measurement = {
  id: number
  memberId: number
  weight: number
  systolic: number
  diastolic: number
  pulse: number
  source: string
  date: string
}
const initialMembers: Member[] = [
  {
    id: 1,
    name: "Quang",
    age: 22,
    height: 170,
    weight: 65,
    gender: "Nam",
    birth: "2003-02-14",
    avatar: 0,
  },
  {
    id: 2,
    name: "Mẹ",
    age: 48,
    height: 158,
    weight: 55,
    gender: "Nữ",
    birth: "1977-05-20",
    avatar: 1,
  },
  {
    id: 3,
    name: "Ba",
    age: 50,
    height: 172,
    weight: 70,
    gender: "Nam",
    birth: "1975-08-10",
    avatar: 2,
  },
  {
    id: 4,
    name: "Em gái",
    age: 16,
    height: 160,
    weight: 50,
    gender: "Nữ",
    birth: "2009-11-15",
    avatar: 3,
  },
]
const initialMeasurements: Measurement[] = [
  {
    id: 4,
    memberId: 1,
    weight: 65,
    systolic: 120,
    diastolic: 80,
    pulse: 72,
    source: "IoT",
    date: "2025-09-15T08:30:00",
  },
  {
    id: 3,
    memberId: 3,
    weight: 70,
    systolic: 150,
    diastolic: 95,
    pulse: 78,
    source: "Thủ công",
    date: "2025-09-14T14:32:00",
  },
  {
    id: 2,
    memberId: 2,
    weight: 55,
    systolic: 118,
    diastolic: 76,
    pulse: 70,
    source: "IoT",
    date: "2025-09-14T08:25:00",
  },
  {
    id: 1,
    memberId: 1,
    weight: 65.2,
    systolic: 118,
    diastolic: 76,
    pulse: 70,
    source: "Thủ công",
    date: "2025-09-13T07:45:00",
  },
]
function readSaved<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback
  } catch {
    return fallback
  }
}
function Avatar({ member, small = false }: { member: Member small?: boolean }) {
  return (
    <span
      className={`avatar avatar-${member.avatar % 4} ${small ? "small" : ""}`}
      role="img"
      aria-label={`Ảnh đại diện ${member.name}`}
    />
  )
}
const navigation: { id: string label: string icon: IconName }[] = [
  { id: "home", label: "Tổng quan", icon: "home" },
  { id: "members", label: "Hồ sơ gia đình", icon: "users" },
  { id: "history", label: "Lịch sử đo", icon: "history" },
  { id: "charts", label: "Biểu đồ sức khỏe", icon: "chart" },
  { id: "alerts", label: "Thông báo", icon: "bell" },
]
const formatDate = (date: string) => new Date(date).toLocaleDateString("vi-VN")

export default function App() {
  const [page, setPage] = useState("home")
  const [members, setMembers] = useState<Member[]>(() =>
    readSaved("family-members", initialMembers),
  )
  const [measurements, setMeasurements] = useState<Measurement[]>(() =>
    readSaved("family-measurements", initialMeasurements),
  )
  const [selected, setSelected] = useState(1)
  const [search, setSearch] = useState("")
  const [modal, setModal] =
    useState<"record" | "profile" | "device" | "help" | null>(null)
  const [editing, setEditing] = useState<Member | null>(null)
  const [metric, setMetric] = useState("BMI")
  const [period, setPeriod] = useState("7 ngày")
  const [source, setSource] = useState("manual")
  const [toast, setToast] = useState("")
  const [signedIn, setSignedIn] = useState(true)
  const [loginMode, setLoginMode] = useState(false)
  const [readAlerts, setReadAlerts] = useState(false)
  const [historyFilter, setHistoryFilter] = useState("all")
  const [deviceConnected, setDeviceConnected] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const member =
    members.find((m) => m.id === selected) || members[0] || initialMembers[0]
  const latest = measurements.find((m) => m.memberId === member.id)
  const weight = latest?.weight ?? member.weight
  const bmi = (weight / (member.height / 100) ** 2).toFixed(1)
  const bp = `${latest?.systolic ?? 120}/${latest?.diastolic ?? 80}`
  const pulse = latest?.pulse ?? 72
  const bmiStatus =
    Number(bmi) < 18.5
      ? "Thiếu cân"
      : Number(bmi) < 25
        ? "Bình thường"
        : Number(bmi) < 30
          ? "Thừa cân"
          : "Béo phì"
  const filteredMembers = members.filter((m) =>
    `${m.name} ${m.age}`.toLowerCase().includes(search.toLowerCase()),
  )
  const alertMeasurements = measurements.filter(
    (m) =>
      m.systolic >= 140 || m.diastolic >= 90 || m.pulse > 100 || m.pulse < 60,
  )
  useEffect(() => {
    localStorage.setItem("family-members", JSON.stringify(members))
  }, [members])
  useEffect(() => {
    localStorage.setItem("family-measurements", JSON.stringify(measurements))
  }, [measurements])
  useEffect(() => {
    if (!toast) return
    const timeout = setTimeout(() => setToast(""), 3500)
    return () => clearTimeout(timeout)
  }, [toast])
  useEffect(() => {
    if (!modal) return
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null)
    }
    window.addEventListener("keydown", handle)
    return () => window.removeEventListener("keydown", handle)
  }, [modal])
  function notify(message: string) {
    setToast(message)
  }
  function openProfile(m: Member | null) {
    setEditing(m)
    setModal("profile")
  }
  function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const birth = String(data.get("birth"))
    const age = Math.floor(
      (Date.now() - new Date(birth).getTime()) / 31557600000,
    )
    if (age < 1 || age > 120) return notify("Vui lòng nhập ngày sinh hợp lệ.")
    const next: Member = {
      id: editing?.id ?? Date.now(),
      name: String(data.get("name")).trim(),
      birth,
      age,
      gender: String(data.get("gender")),
      height: Number(data.get("height")),
      weight: Number(data.get("weight")),
      avatar: editing?.avatar ?? members.length % 4,
    }
    setMembers((prev) =>
      editing
        ? prev.map((m) => (m.id === editing.id ? next : m))
        : [...prev, next],
    )
    setModal(null)
    notify(editing ? "Đã cập nhật hồ sơ." : "Đã thêm thành viên mới.")
  }
  function saveMeasurement(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (source === "iot" && !deviceConnected)
      return notify("Hãy bật kết nối mô phỏng trước khi lưu.")
    const record: Measurement = {
      id: Date.now(),
      memberId: Number(data.get("member")),
      weight: Number(data.get("weight")),
      systolic: Number(data.get("systolic")),
      diastolic: Number(data.get("diastolic")),
      pulse: Number(data.get("pulse")),
      source: source === "iot" ? "IoT mô phỏng" : "Thủ công",
      date: new Date().toISOString(),
    }
    if (record.systolic <= record.diastolic)
      return notify("Huyết áp tâm thu phải lớn hơn tâm trương.")
    setMeasurements((prev) => [record, ...prev])
    setSelected(record.memberId)
    setModal(null)
    notify("Đã lưu chỉ số sức khỏe vào lịch sử.")
  }
  function exportData() {
    const rows = [
      [
        "Thành viên",
        "Ngày đo",
        "Cân nặng",
        "Tâm thu",
        "Tâm trương",
        "Nhịp tim",
        "Nguồn",
      ],
      ...measurements.map((r) => [
        members.find((m) => m.id === r.memberId)?.name,
        r.date,
        r.weight,
        r.systolic,
        r.diastolic,
        r.pulse,
        r.source,
      ]),
    ]
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + rows.map((r) => r.join(",")).join("\n")], {
        type: "text/csv;charset=utf-8;",
      }),
    )
    const a = document.createElement("a")
    a.href = url
    a.download = "lich-su-suc-khoe.csv"
    a.click()
    URL.revokeObjectURL(url)
    notify("Đã xuất lịch sử đo.")
  }
  const memberSelect = (
    <select
      className="member-select"
      value={member.id}
      onChange={(e) => setSelected(Number(e.target.value))}
      aria-label="Chọn thành viên"
    >
      {members.map((m) => (
        <option key={m.id} value={m.id}>
          {m.name}
        </option>
      ))}
    </select>
  )
  const metrics = (
    <div className="metrics-grid">
      <MetricCard
        title="Chỉ số BMI"
        value={bmi}
        unit="kg/m²"
        status={bmiStatus}
        icon="weight"
        color="green"
        trend="Trong ngưỡng an toàn"
        spark="M0 24 12 18 24 21 36 9 48 15 60 11 72 13 84 6 96 10"
      />
      <MetricCard
        title="Huyết áp"
        value={bp}
        unit="mmHg"
        status={(latest?.systolic ?? 120) >= 140 ? "Cao" : "Tốt"}
        icon="pressure"
        color="blue"
        trend="Ổn định so với hôm qua"
        spark="M0 20 12 21 24 12 36 17 48 8 60 11 72 10 84 16 96 8"
      />
      <MetricCard
        title="Nhịp tim"
        value={String(pulse)}
        unit="bpm"
        status={pulse >= 60 && pulse <= 100 ? "Bình thường" : "Ngoài ngưỡng"}
        icon="heart"
        color="purple"
        trend="Nhịp tim lúc nghỉ ngơi"
        spark="M0 20 12 20 24 12 36 23 48 5 60 25 72 12 84 16 96 12"
      />
    </div>
  )
  const familyPanel = (
    <section className="panel family-panel">
      <div className="panel-heading">
        <h2>
          Thành viên gia đình <span className="count">{members.length}</span>
        </h2>
        <button
          className="icon-button pale"
          aria-label="Thêm thành viên"
          onClick={() => openProfile(null)}
        >
          <Icon name="plus" size={18} />
        </button>
      </div>
      <div className="family-list">
        {members.map((m) => (
          <button
            className={`family-row ${selected === m.id ? "selected" : ""}`}
            key={m.id}
            onClick={() => setSelected(m.id)}
          >
            <Avatar member={m} />
            <div>
              <strong>
                {m.name}
                {m.id === 1 && <span className="you-label">Bạn</span>}
              </strong>
              <span>
                {m.age} tuổi <i>·</i> {m.height} cm <i>·</i> {m.weight} kg
              </span>
            </div>
            <Icon name="chevron" size={16} />
          </button>
        ))}
      </div>
      <button
        className="text-link family-manage"
        onClick={() => setPage("members")}
      >
        Quản lý hồ sơ gia đình <Icon name="arrow" size={16} />
      </button>
    </section>
  )
  const chartPanel = (
    <section className="panel chart-panel">
      <div className="panel-heading">
        <div>
          <h2>Xu hướng sức khỏe</h2>
          <p>Theo dõi những thay đổi tích cực mỗi ngày</p>
        </div>
        <select
          className="period-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          aria-label="Khoảng thời gian"
        >
          <option>7 ngày</option>
          <option>14 ngày</option>
          <option>30 ngày</option>
        </select>
      </div>
      <div className="chart-toolbar">
        <div className="tabs">
          {["BMI", "Huyết áp", "Nhịp tim"].map((t) => (
            <button
              key={t}
              className={metric === t ? "active" : ""}
              onClick={() => setMetric(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <span className="chart-unit">
          {metric === "BMI" ? "kg/m²" : metric === "Huyết áp" ? "mmHg" : "bpm"}
        </span>
      </div>
      <HealthChart metric={metric} period={period} selected={selected} />
      <div className="chart-legend">
        <span>
          <i className="dot blue-dot" />
          Nhập tay
        </span>
        <span>
          <i className="dot green-dot" />
          Thiết bị IoT
        </span>
        <span className="safe-label">
          <i />
          Ngưỡng bình thường
        </span>
      </div>
    </section>
  )
  const alertsPanel = (
    <section className="panel alerts-panel">
      <div className="panel-heading">
        <h2>Cảnh báo gần đây</h2>
        <span className="small-icon orange">
          <Icon name="bell" size={17} />
        </span>
      </div>
      {alertMeasurements.length > 0 ? (
        <button className="alert-box" onClick={() => setPage("alerts")}>
          <span className="alert-symbol">
            <Icon name="pressure" size={20} />
          </span>
          <div>
            <strong>
              Huyết áp của{" "}
              {
                members.find((m) => m.id === alertMeasurements[0].memberId)
                  ?.name
              }{" "}
              cao
            </strong>
            <p>
              {alertMeasurements[0].systolic}/{alertMeasurements[0].diastolic}{" "}
              mmHg · Vượt ngưỡng bình thường
            </p>
            <small>
              {formatDate(alertMeasurements[0].date)},{" "}
              {new Date(alertMeasurements[0].date).toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
          <Icon name="chevron" size={15} />
        </button>
      ) : (
        <p className="empty">Không có chỉ số vượt ngưỡng.</p>
      )}
      <div className="health-note">
        <Icon name="shield" size={19} />
        <p>
          Chủ động theo dõi, an tâm mỗi ngày.
          <br />
          <span>Sức khỏe gia đình luôn là ưu tiên.</span>
        </p>
      </div>
      <button className="text-link" onClick={() => setPage("alerts")}>
        Xem tất cả thông báo <Icon name="arrow" size={16} />
      </button>
    </section>
  )
  const historyPanel = (full = false) => (
    <section className="panel history-panel">
      <div className="panel-heading">
        <div>
          <h2>{full ? "Nhật ký sức khỏe" : "Lịch sử đo gần đây"}</h2>
          {full && <p>Tất cả chỉ số sức khỏe của gia đình bạn</p>}
        </div>
        <button
          className="text-link"
          onClick={() => (full ? exportData() : setPage("history"))}
        >
          {full ? "Xuất dữ liệu" : "Xem tất cả"}
          <Icon name={full ? "download" : "arrow"} size={16} />
        </button>
      </div>
      {full && (
        <div className="filter-chips">
          <button
            className={historyFilter === "all" ? "active" : ""}
            onClick={() => setHistoryFilter("all")}
          >
            Tất cả
          </button>
          {members.map((m) => (
            <button
              key={m.id}
              className={historyFilter === String(m.id) ? "active" : ""}
              onClick={() => setHistoryFilter(String(m.id))}
            >
              {m.name}
            </button>
          ))}
        </div>
      )}
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Thành viên</th>
              <th>Thời gian đo</th>
              <th>Cân nặng</th>
              <th>Huyết áp</th>
              <th>Nhịp tim</th>
              <th>Nguồn dữ liệu</th>
            </tr>
          </thead>
          <tbody>
            {measurements
              .filter(
                (r) =>
                  !full ||
                  historyFilter === "all" ||
                  String(r.memberId) === historyFilter,
              )
              .slice(0, full ? undefined : 3)
              .map((r) => {
                const m = members.find((m) => m.id === r.memberId)
                return (
                  <tr key={r.id}>
                    <td>
                      <div className="table-person">
                        {m && <Avatar member={m} small />}
                        <strong>{m?.name ?? "Đã xóa"}</strong>
                      </div>
                    </td>
                    <td>
                      {formatDate(r.date)}
                      <span className="table-time">
                        {new Date(r.date).toLocaleTimeString("vi-VN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </td>
                    <td>
                      {r.weight} <span className="muted">kg</span>
                    </td>
                    <td className={r.systolic >= 140 ? "warning-text" : ""}>
                      {r.systolic}/{r.diastolic}{" "}
                      <span className="muted">mmHg</span>
                    </td>
                    <td>
                      {r.pulse} <span className="muted">bpm</span>
                    </td>
                    <td>
                      <span
                        className={`source-badge ${
                          r.source.includes("IoT") ? "iot" : ""
                        }`}
                      >
                        <Icon
                          name={r.source.includes("IoT") ? "wifi" : "edit"}
                          size={12}
                        />
                        {r.source}
                      </span>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        {!measurements.length && (
          <p className="empty">Chưa có dữ liệu. Hãy ghi chỉ số đầu tiên.</p>
        )}
      </div>
    </section>
  )

  if (!signedIn)
    return (
      <div className="login-page">
        <div className="login-art">
          <span className="large-logo">
            <Icon name="heart" size={66} />
          </span>
          <h1>Sức khỏe Gia đình</h1>
          <p>Cùng nhau khỏe mạnh hơn.</p>
          <div className="login-avatars">
            {initialMembers.map((m) => (
              <Avatar key={m.id} member={m} />
            ))}
          </div>
          <p>Một nơi để chăm sóc những người bạn yêu thương.</p>
        </div>
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault()
            setSignedIn(true)
            notify("Chào mừng bạn đến với Sức khỏe Gia đình!")
          }}
        >
          <span className="eyebrow">SỨC KHỎE GIA ĐÌNH</span>
          <h1>{loginMode ? "Tạo tài khoản" : "Chào mừng trở lại"}</h1>
          <p>Theo dõi sức khỏe, kết nối yêu thương.</p>
          {loginMode && (
            <label>
              Họ và tên
              <input required placeholder="Nhập họ và tên" />
            </label>
          )}
          <label>
            Email
            <input type="email" required placeholder="ban@example.com" />
          </label>
          <label>
            Mật khẩu
            <input
              type="password"
              required
              minLength={6}
              placeholder="Ít nhất 6 ký tự"
            />
          </label>
          <button className="primary">
            {loginMode ? "Đăng ký" : "Đăng nhập"}
            <Icon name="arrow" size={18} />
          </button>
          <button
            type="button"
            className="text-link"
            onClick={() => setLoginMode(!loginMode)}
          >
            {loginMode
              ? "Đã có tài khoản? Đăng nhập"
              : "Chưa có tài khoản? Đăng ký"}
          </button>
          <button
            type="button"
            className="guest-button"
            onClick={() => setSignedIn(true)}
          >
            Tiếp tục với tư cách khách
          </button>
          <small>Bản demo giao diện · Không gửi thông tin đăng nhập</small>
        </form>
      </div>
    )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setPage("home")
          }}
        >
          <span className="brand-icon">
            <Icon name="heart" size={27} />
          </span>
          <div>
            Sức khỏe<span>Gia đình</span>
          </div>
        </a>
        <div className="sidebar-label">KHÔNG GIAN GIA ĐÌNH</div>
        <nav>
          {navigation.map((n) => (
            <button
              key={n.id}
              className={page === n.id ? "nav-item active" : "nav-item"}
              onClick={() => {
                setPage(n.id)
                setSearch("")
              }}
            >
              <Icon name={n.icon} />
              <span>{n.label}</span>
              {n.id === "alerts" &&
                !readAlerts &&
                alertMeasurements.length > 0 && (
                  <span className="nav-badge">{alertMeasurements.length}</span>
                )}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="care-card">
            <span className="care-icon">
              <Icon name="shield" size={25} />
            </span>
            <strong>An tâm cùng gia đình</strong>
            <p>
              Mỗi chỉ số nhỏ,
              <br />
              một sự quan tâm lớn.
            </p>
            <span className="care-line" />
          </div>
          <button
            className={`nav-item ${page === "settings" ? "active" : ""}`}
            onClick={() => setPage("settings")}
          >
            <Icon name="settings" />
            <span>Cài đặt</span>
          </button>
          <button className="account" onClick={() => setPage("settings")}>
            <Avatar member={members[0] || initialMembers[0]} />
            <div>
              <strong>{members[0]?.name || "Quang"}</strong>
              <span>Tài khoản cá nhân</span>
            </div>
            <Icon name="chevron" size={16} />
          </button>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div className="breadcrumb">
            Gia đình của bạn <Icon name="chevron" size={13} />
            <strong>
              {navigation.find((n) => n.id === page)?.label || "Cài đặt"}
            </strong>
          </div>
          <div className="header-actions">
            <div className="header-search">
              <Icon name="search" size={17} />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  if (e.target.value) setPage("members")
                }}
                placeholder="Tìm thành viên..."
                aria-label="Tìm thành viên"
              />
              <kbd>⌘ K</kbd>
            </div>
            <button
              className="notification-button"
              aria-label="Xem thông báo"
              onClick={() => setPage("alerts")}
            >
              <Icon name="bell" />
              {!readAlerts && alertMeasurements.length > 0 && <i />}
            </button>
            <span className="header-divider" />
            <button
              className="header-avatar"
              onClick={() => setPage("settings")}
              aria-label="Tài khoản"
            >
              <Avatar member={members[0] || initialMembers[0]} small />
            </button>
          </div>
        </header>
        <main>
          <div className="page-heading">
            <div>
              <div className="eyebrow">CHĂM SÓC SỨC KHỎE MỖI NGÀY</div>
              <h1>
                {page === "home"
                  ? "Tổng quan sức khỏe"
                  : page === "members"
                    ? "Hồ sơ gia đình"
                    : page === "history"
                      ? "Lịch sử đo"
                      : page === "charts"
                        ? "Biểu đồ sức khỏe"
                        : page === "alerts"
                          ? "Thông báo sức khỏe"
                          : "Cá nhân & cài đặt"}
              </h1>
              <p>
                {page === "home"
                  ? "Một góc nhìn trọn vẹn về sức khỏe của những người bạn yêu thương."
                  : page === "members"
                    ? "Chăm sóc từng thành viên, gắn kết cả gia đình."
                    : page === "history"
                      ? "Lưu lại từng thay đổi, theo dõi sức khỏe lâu dài."
                      : page === "charts"
                        ? "Hiểu các chỉ số của bạn qua từng ngày."
                        : page === "alerts"
                          ? "Những cập nhật quan trọng để gia đình luôn an tâm."
                          : "Quản lý tài khoản và thiết bị của bạn."}
              </p>
            </div>
            <button
              className="primary"
              onClick={() =>
                page === "members"
                  ? openProfile(null)
                  : (setSource("manual"), setModal("record"))
              }
            >
              <Icon name="plus" size={19} />
              {page === "members" ? "Thêm thành viên" : "Ghi chỉ số"}
            </button>
          </div>
          {page === "home" && (
            <>
              <section className="welcome-banner">
                <div className="welcome-copy">
                  <span className="welcome-tag">
                    <i />
                    CÙNG NHAU KHỎE MẠNH HƠN
                  </span>
                  <h2>
                    Chào buổi sáng, Quang{" "}
                    <span className="sun-symbol" aria-hidden="true">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M20 4l-2 2M6 18l-2 2" />
                      </svg>
                    </span>
                  </h2>
                  <p>Hôm nay, bạn đã quan tâm đến sức khỏe gia đình chưa?</p>
                  <button onClick={() => setModal("record")}>
                    Ghi lại chỉ số hôm nay <Icon name="arrow" size={17} />
                  </button>
                </div>
                <div className="banner-art" aria-hidden="true">
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <span className="floating-pill pill-heart">
                    <Icon name="heart" size={23} />
                    <span>
                      Nhịp tim
                      <strong>
                        72 <small>bpm</small>
                      </strong>
                    </span>
                  </span>
                  <div className="heart-center">
                    <Icon name="heart" size={66} />
                  </div>
                  <span className="floating-pill pill-check">
                    <span className="mini-check">
                      <Icon name="check" size={14} />
                    </span>
                    Gia đình khỏe mạnh
                  </span>
                  <span className="art-dot dot-one" />
                  <span className="art-dot dot-two" />
                </div>
              </section>
              <div className="section-title">
                <h2>Tổng quan hôm nay</h2>
                <div className="overview-person">
                  <Avatar member={member} small />
                  {memberSelect}
                  <span className="vertical-line" />
                  <Icon name="calendar" size={16} />
                  <span>
                    {formatDate(latest?.date ?? new Date().toISOString())}
                  </span>
                </div>
              </div>
              {metrics}
              <div className="dashboard-grid">
                <div className="main-column">
                  {chartPanel}
                  {historyPanel()}
                </div>
                <div className="side-column">
                  {familyPanel}
                  {alertsPanel}
                  <DeviceCard
                    connected={deviceConnected}
                    onClick={() => setModal("device")}
                  />
                </div>
              </div>
            </>
          )}
          {page === "members" && (
            <>
              <div className="members-toolbar">
                <div className="search-field">
                  <Icon name="search" size={18} />
                  <input
                    placeholder="Tìm kiếm theo tên hoặc tuổi..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search && (
                    <button
                      aria-label="Xóa tìm kiếm"
                      onClick={() => setSearch("")}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  )}
                </div>
                <span>{filteredMembers.length} thành viên</span>
              </div>
              <div className="profile-grid">
                {filteredMembers.map((m) => (
                  <section className="panel profile-card" key={m.id}>
                    <div className="profile-card-top">
                      <Avatar member={m} />
                      <button
                        className="icon-button"
                        aria-label={`Sửa hồ sơ ${m.name}`}
                        onClick={() => openProfile(m)}
                      >
                        <Icon name="edit" size={18} />
                      </button>
                    </div>
                    <h2>
                      {m.name}
                      {m.id === 1 && <span className="you-label">Bạn</span>}
                    </h2>
                    <p>
                      {m.age} tuổi · {m.gender}
                    </p>
                    <div className="profile-stats">
                      <span>
                        Chiều cao
                        <strong>
                          {m.height} <small>cm</small>
                        </strong>
                      </span>
                      <span>
                        Cân nặng
                        <strong>
                          {m.weight} <small>kg</small>
                        </strong>
                      </span>
                      <span>
                        BMI
                        <strong>
                          {(m.weight / (m.height / 100) ** 2).toFixed(1)}
                        </strong>
                      </span>
                    </div>
                    <button
                      className="secondary"
                      onClick={() => {
                        setSelected(m.id)
                        setPage("charts")
                      }}
                    >
                      Xem chỉ số sức khỏe
                      <Icon name="arrow" size={17} />
                    </button>
                  </section>
                ))}
              </div>
              {!filteredMembers.length && (
                <div className="panel empty">
                  Không tìm thấy thành viên phù hợp.
                </div>
              )}
            </>
          )}
          {page === "charts" && (
            <>
              <div className="section-title">
                <h2>Chỉ số của {member.name}</h2>
                {memberSelect}
              </div>
              {metrics}
              <div className="charts-layout">
                {chartPanel}
                <section className="panel insight-panel">
                  <span className="small-icon green">
                    <Icon name="shield" />
                  </span>
                  <h2>Hiểu sức khỏe của bạn</h2>
                  <p>
                    BMI hiện tại của {member.name} là <strong>{bmi}</strong>,
                    thuộc nhóm <strong>{bmiStatus.toLowerCase()}</strong>.
                  </p>
                  <div className="bmi-scale" />
                  <div className="bmi-labels">
                    <span>&lt;18.5</span>
                    <span>18.5–24.9</span>
                    <span>25–29.9</span>
                    <span>≥30</span>
                  </div>
                  <p className="muted">
                    Biểu đồ dùng dữ liệu minh họa. Các chỉ số tổng quan được cập
                    nhật từ dữ liệu bạn lưu.
                  </p>
                  <small>
                    Thông tin chỉ mang tính tham khảo, không thay thế tư vấn y
                    tế.
                  </small>
                </section>
              </div>
            </>
          )}
          {page === "history" && historyPanel(true)}
          {page === "alerts" && (
            <section className="panel notification-panel">
              <div className="panel-heading">
                <h2>Cảnh báo & cập nhật</h2>
                <button
                  className="text-link"
                  onClick={() => {
                    setReadAlerts(true)
                    notify("Đã đánh dấu tất cả là đã đọc.")
                  }}
                >
                  <Icon name="check" size={16} />
                  Đánh dấu đã đọc
                </button>
              </div>
              {alertMeasurements.map((r) => (
                <div className="notification-row" key={r.id}>
                  <span className="small-icon orange">
                    <Icon name="bell" />
                  </span>
                  <div>
                    <h3>
                      Chỉ số cần chú ý ·{" "}
                      {members.find((m) => m.id === r.memberId)?.name}
                    </h3>
                    <p>
                      Huyết áp {r.systolic}/{r.diastolic} mmHg · Nhịp tim{" "}
                      {r.pulse} bpm. Hãy nghỉ ngơi và kiểm tra lại chỉ số.
                    </p>
                    <small>{formatDate(r.date)}</small>
                  </div>
                  {!readAlerts && <i className="dot blue-dot" />}
                </div>
              ))}
              <div className="notification-row">
                <span className="small-icon green">
                  <Icon name="shield" />
                </span>
                <div>
                  <h3>Chỉ số BMI của {member.name}</h3>
                  <p>
                    BMI {bmi} · {bmiStatus}. Duy trì thói quen theo dõi sức khỏe
                    mỗi ngày.
                  </p>
                  <small>Cập nhật gần nhất</small>
                </div>
              </div>
              <div className="medical-note">
                <Icon name="help" size={18} />
                Cảnh báo chỉ mang tính tham khảo. Hãy liên hệ chuyên gia y tế
                khi có dấu hiệu bất thường.
              </div>
            </section>
          )}
          {page === "settings" && (
            <div className="settings-layout">
              <section className="panel settings-panel">
                <div className="settings-profile">
                  <Avatar member={members[0] || initialMembers[0]} />
                  <div>
                    <h2>{members[0]?.name || "Quang"}</h2>
                    <p>Tài khoản cá nhân · Quản trị gia đình</p>
                  </div>
                  <button
                    className="secondary"
                    onClick={() => openProfile(members[0])}
                  >
                    Chỉnh sửa hồ sơ
                  </button>
                </div>
                <h3>Tùy chọn ứng dụng</h3>
                <div className="settings-row">
                  <Icon name="bell" />
                  <div>
                    <strong>Thông báo sức khỏe</strong>
                    <p>Nhận nhắc nhở theo dõi chỉ số mỗi ngày</p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={notifications}
                    aria-label="Bật thông báo"
                    className={`toggle ${notifications ? "on" : ""}`}
                    onClick={() => {
                      setNotifications(!notifications)
                      notify(
                        notifications
                          ? "Đã tắt nhắc nhở trong bản demo."
                          : "Đã bật nhắc nhở trong bản demo.",
                      )
                    }}
                  >
                    <span />
                  </button>
                </div>
                <button
                  className="settings-row"
                  onClick={() => setModal("device")}
                >
                  <Icon name="wifi" />
                  <div>
                    <strong>Quản lý thiết bị IoT</strong>
                    <p>ESP32 · Chế độ mô phỏng</p>
                  </div>
                  <Icon name="chevron" size={17} />
                </button>
                <button className="settings-row" onClick={exportData}>
                  <Icon name="download" />
                  <div>
                    <strong>Dữ liệu sức khỏe</strong>
                    <p>Xuất lịch sử đo dưới dạng CSV</p>
                  </div>
                  <Icon name="chevron" size={17} />
                </button>
                <button
                  className="settings-row"
                  onClick={() => setModal("help")}
                >
                  <Icon name="help" />
                  <div>
                    <strong>Trợ giúp & quyền riêng tư</strong>
                    <p>Tìm hiểu cách sử dụng ứng dụng</p>
                  </div>
                  <Icon name="chevron" size={17} />
                </button>
                <button
                  className="settings-row danger"
                  onClick={() => setSignedIn(false)}
                >
                  <Icon name="logout" />
                  <div>
                    <strong>Đăng xuất</strong>
                  </div>
                </button>
              </section>
              <DeviceCard
                connected={deviceConnected}
                onClick={() => setModal("device")}
              />
            </div>
          )}
          <footer>
            <span>
              <Icon name="heart" size={14} />
              Sức khỏe Gia đình · Cùng nhau khỏe mạnh hơn
            </span>
            <span>
              Dữ liệu được lưu trên trình duyệt của bạn
              <Icon name="shield" size={14} />
            </span>
          </footer>
        </main>
      </div>
      <nav className="mobile-nav">
        {navigation.map((n) => (
          <button
            key={n.id}
            className={page === n.id ? "active" : ""}
            onClick={() => setPage(n.id)}
          >
            <Icon name={n.icon} size={21} />
            <span>
              {n.id === "members"
                ? "Gia đình"
                : n.id === "charts"
                  ? "Biểu đồ"
                  : n.id === "history"
                    ? "Lịch sử"
                    : n.label}
            </span>
          </button>
        ))}
      </nav>
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-heading">
              <div>
                <span className="eyebrow">SỨC KHỎE GIA ĐÌNH</span>
                <h2 id="modal-title">
                  {modal === "record"
                    ? "Nhập chỉ số sức khỏe"
                    : modal === "profile"
                      ? editing
                        ? "Chỉnh sửa hồ sơ"
                        : "Thêm thành viên"
                      : modal === "device"
                        ? "Kết nối thiết bị IoT"
                        : "Trợ giúp & quyền riêng tư"}
                </h2>
              </div>
              <button
                className="icon-button"
                aria-label="Đóng"
                onClick={() => setModal(null)}
              >
                <Icon name="close" />
              </button>
            </div>
            {modal === "record" && (
              <>
                <div className="tabs modal-tabs">
                  <button
                    className={source === "manual" ? "active" : ""}
                    onClick={() => setSource("manual")}
                  >
                    Nhập tay
                  </button>
                  <button
                    className={source === "iot" ? "active" : ""}
                    onClick={() => setSource("iot")}
                  >
                    <Icon name="wifi" size={16} />
                    Tự động (IoT)
                  </button>
                </div>
                {source === "iot" && (
                  <div className="iot-info">
                    <Icon name="wifi" />
                    <div>
                      <strong>
                        {deviceConnected
                          ? "Đã kết nối thiết bị mô phỏng"
                          : "Chưa kết nối thiết bị"}
                      </strong>
                      <p>Dữ liệu demo ESP32, không phải số đo thực.</p>
                    </div>
                    <button
                      className="text-link"
                      onClick={() => setDeviceConnected(!deviceConnected)}
                    >
                      {deviceConnected ? "Ngắt" : "Kết nối"}
                    </button>
                  </div>
                )}
                <form key={source} onSubmit={saveMeasurement}>
                  <label>
                    Thành viên
                    <select name="member" defaultValue={member.id}>
                      {members.map((m) => (
                        <option value={m.id} key={m.id}>
                          {m.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Cân nặng (kg)
                    <input
                      name="weight"
                      type="number"
                      min="10"
                      max="300"
                      step="0.1"
                      defaultValue={source === "iot" ? 64.8 : weight}
                      required
                      readOnly={source === "iot"}
                    />
                  </label>
                  <label>
                    Huyết áp (mmHg)
                    <div className="input-pair">
                      <input
                        name="systolic"
                        aria-label="Huyết áp tâm thu"
                        type="number"
                        min="60"
                        max="250"
                        defaultValue={
                          source === "iot" ? 118 : (latest?.systolic ?? 120)
                        }
                        required
                        readOnly={source === "iot"}
                      />
                      <span>/</span>
                      <input
                        name="diastolic"
                        aria-label="Huyết áp tâm trương"
                        type="number"
                        min="30"
                        max="150"
                        defaultValue={
                          source === "iot" ? 76 : (latest?.diastolic ?? 80)
                        }
                        required
                        readOnly={source === "iot"}
                      />
                    </div>
                  </label>
                  <label>
                    Nhịp tim (bpm)
                    <input
                      name="pulse"
                      type="number"
                      min="30"
                      max="220"
                      defaultValue={source === "iot" ? 70 : pulse}
                      required
                      readOnly={source === "iot"}
                    />
                  </label>
                  <div className="form-note">
                    <Icon name="shield" size={17} />
                    BMI được tự động tính dựa trên chiều cao trong hồ sơ.
                  </div>
                  <button className="primary full-width" type="submit">
                    <Icon name="check" size={18} />
                    Lưu chỉ số sức khỏe
                  </button>
                </form>
              </>
            )}
            {modal === "profile" && (
              <form onSubmit={saveProfile}>
                <div className="edit-avatar">
                  <Avatar
                    member={editing || initialMembers[members.length % 4]}
                  />
                </div>
                <label>
                  Họ và tên
                  <input
                    name="name"
                    defaultValue={editing?.name}
                    placeholder="Nhập tên thành viên"
                    required
                    maxLength={50}
                  />
                </label>
                <div className="form-grid">
                  <label>
                    Ngày sinh
                    <input
                      type="date"
                      name="birth"
                      defaultValue={editing?.birth}
                      required
                      max={new Date().toISOString().slice(0, 10)}
                    />
                  </label>
                  <label>
                    Giới tính
                    <select
                      name="gender"
                      defaultValue={editing?.gender || "Nam"}
                    >
                      <option>Nam</option>
                      <option>Nữ</option>
                      <option>Khác</option>
                    </select>
                  </label>
                  <label>
                    Chiều cao (cm)
                    <input
                      name="height"
                      type="number"
                      min="50"
                      max="250"
                      defaultValue={editing?.height}
                      required
                    />
                  </label>
                  <label>
                    Cân nặng (kg)
                    <input
                      name="weight"
                      type="number"
                      min="10"
                      max="300"
                      step="0.1"
                      defaultValue={editing?.weight}
                      required
                    />
                  </label>
                </div>
                <button className="primary full-width">
                  {editing ? "Lưu thay đổi" : "Thêm thành viên"}
                </button>
                {editing && members.length > 1 && (
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => {
                      if (
                        !confirm(
                          `Xóa hồ sơ ${editing.name} và toàn bộ lịch sử đo của thành viên này?`,
                        )
                      )
                        return
                      setMembers((prev) =>
                        prev.filter((m) => m.id !== editing.id),
                      )
                      setMeasurements((prev) =>
                        prev.filter((m) => m.memberId !== editing.id),
                      )
                      if (selected === editing.id)
                        setSelected(
                          members.find((m) => m.id !== editing.id)!.id,
                        )
                      setModal(null)
                      notify("Đã xóa hồ sơ.")
                    }}
                  >
                    Xóa hồ sơ
                  </button>
                )}
              </form>
            )}
            {modal === "device" && (
              <div className="device-modal">
                <span className="device-modal-icon">
                  <Icon name="wifi" size={40} />
                </span>
                <h3>ESP32 · Family Health</h3>
                <p>MAX30102 + Loadcell · Device ID: ESP32-DEMO-01</p>
                <div className="demo-notice">
                  Đây là kết nối mô phỏng. Kết nối phần cứng thực cần cấu hình
                  dịch vụ WiFi/BLE và API nhận dữ liệu.
                </div>
                <button
                  className="primary full-width"
                  onClick={() => {
                    setDeviceConnected(!deviceConnected)
                    notify(
                      deviceConnected
                        ? "Đã ngắt thiết bị mô phỏng."
                        : "Đã kết nối thiết bị mô phỏng.",
                    )
                  }}
                >
                  {deviceConnected
                    ? "Ngắt kết nối mô phỏng"
                    : "Kết nối mô phỏng"}
                </button>
                {deviceConnected && (
                  <button
                    className="secondary full-width"
                    onClick={() => {
                      setSource("iot")
                      setModal("record")
                    }}
                  >
                    Xem dữ liệu mô phỏng
                    <Icon name="arrow" size={17} />
                  </button>
                )}
              </div>
            )}
            {modal === "help" && (
              <div className="help-content">
                <h3>Chăm sóc sức khỏe, từng bước nhỏ</h3>
                <p>
                  Thêm hồ sơ các thành viên trong gia đình, sau đó chọn “Ghi chỉ
                  số” để lưu cân nặng, huyết áp và nhịp tim. BMI sẽ được tính tự
                  động.
                </p>
                <h3>Dữ liệu của bạn</h3>
                <p>
                  Thông tin được lưu trong trình duyệt hiện tại (localStorage),
                  chưa đồng bộ lên máy chủ. Bạn có thể xuất lịch sử đo ở phần
                  Cài đặt.
                </p>
                <h3>Lưu ý y tế</h3>
                <p>
                  Chỉ số và cảnh báo chỉ mang tính tham khảo, không dùng để chẩn
                  đoán. Hãy tham khảo chuyên gia y tế nếu có bất thường.
                </p>
              </div>
            )}
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <span>
            <Icon name="check" size={18} />
          </span>
          {toast}
          <button aria-label="Đóng thông báo" onClick={() => setToast("")}>
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
function MetricCard({
  title,
  value,
  unit,
  status,
  icon,
  color,
  trend,
  spark,
}: {
  title: string
  value: string
  unit: string
  status: string
  icon: IconName
  color: string
  trend: string
  spark: string
}) {
  return (
    <section className={`metric-card ${color}`}>
      <div className="metric-top">
        <span className={`small-icon ${color}`}>
          <Icon name={icon} />
        </span>
        <span>{title}</span>
        <span className="metric-status">
          <i />
          {status}
        </span>
      </div>
      <div className="metric-value">
        {value}
        <span>{unit}</span>
        <svg viewBox="0 0 100 32" aria-hidden="true">
          <path
            d={spark}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="metric-bottom">
        <Icon name="check" size={13} />
        {trend}
      </div>
    </section>
  )
}
function DeviceCard({
  connected,
  onClick,
}: {
  connected: boolean
  onClick: () => void
}) {
  return (
    <button className="device-card" onClick={onClick}>
      <span className="device-icon">
        <Icon name="wifi" size={22} />
      </span>
      <div>
        <strong>Thiết bị IoT</strong>
        <span>
          <i className={connected ? "connected" : ""} />
          {connected ? "Đã kết nối mô phỏng" : "Kết nối để tự động theo dõi"}
        </span>
      </div>
      <Icon name="chevron" size={16} />
    </button>
  )
}
function HealthChart({
  metric,
  period,
  selected,
}: {
  metric: string
  period: string
  selected: number
}) {
  const count = period === "7 ngày" ? 7 : period === "14 ngày" ? 14 : 30
  const values =
    metric === "BMI"
      ? [28, 26, 24, 22, 20, 18]
      : metric === "Huyết áp"
        ? [160, 150, 140, 130, 120, 110]
        : [100, 90, 80, 70, 60, 50]
  const blue = Array.from(
    { length: count },
    (_, i) => 126 + Math.sin(i * 1.7 + selected) * 13 + i * 1.7,
  )
  const green = Array.from(
    { length: count },
    (_, i) => 121 + Math.sin(i * 1.3 + selected) * 9,
  )
  const x = (i: number) => 48 + (i * 552) / (count - 1)
  const points = (ys: number[]) =>
    ys.map(
      (y, i) =>
        `${x(i)},${y + (metric === "Huyết áp" ? 14 : metric === "Nhịp tim" ? -12 : 0)}`,
    ).join(" ")
  return (
    <div className="chart-wrapper">
      <svg
        viewBox="0 0 630 225"
        role="img"
        aria-label={`Biểu đồ ${metric} minh họa trong ${period}`}
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3980f6" stopOpacity=".1" />
            <stop offset="100%" stopColor="#3980f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="48" y="81" width="552" height="88" rx="3" fill="#f0faf5" />
        {values.map((v, i) => (
          <g key={v}>
            <line
              x1="48"
              x2="600"
              y1={25 + i * 31}
              y2={25 + i * 31}
              stroke="#e9edf2"
              strokeDasharray="3 4"
            />
            <text
              x="31"
              y={29 + i * 31}
              textAnchor="end"
              className="chart-axis"
            >
              {v}
            </text>
          </g>
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <g key={i}>
            <line
              x1={48 + i * 92}
              x2={48 + i * 92}
              y1="25"
              y2="180"
              stroke="#f0f2f6"
            />
            <text
              x={48 + i * 92}
              y="207"
              textAnchor="middle"
              className="chart-axis"
            >
              {new Date(
                2025,
                8,
                15 - (count - 1) + Math.round((i * (count - 1)) / 6),
              ).toLocaleDateString("vi-VN", {
                day: "2-digit",
                month: "2-digit",
              })}
            </text>
          </g>
        ))}
        <polygon
          points={`48,180 ${points(blue)} 600,180`}
          fill="url(#chartFill)"
        />
        <polyline
          points={points(blue)}
          fill="none"
          stroke="#3b7ff1"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <polyline
          points={points(green)}
          fill="none"
          stroke="#27b885"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {blue.map((y, i) => (
          <circle
            key={`b${i}`}
            cx={x(i)}
            cy={
              y + (metric === "Huyết áp" ? 14 : metric === "Nhịp tim" ? -12 : 0)
            }
            r="3.5"
            fill="#3b7ff1"
            stroke="white"
            strokeWidth="1.5"
          >
            <title>Nhập tay · Ngày {i + 1}</title>
          </circle>
        ))}
        {green.map((y, i) => (
          <circle
            key={`g${i}`}
            cx={x(i)}
            cy={
              y + (metric === "Huyết áp" ? 14 : metric === "Nhịp tim" ? -12 : 0)
            }
            r="3.5"
            fill="#27b885"
            stroke="white"
            strokeWidth="1.5"
          >
            <title>IoT · Ngày {i + 1}</title>
          </circle>
        ))}
      </svg>
      <span className="chart-demo-label">Dữ liệu minh họa</span>
    </div>
  )
}
